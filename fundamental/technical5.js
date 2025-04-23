let input = [
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 1,
      name: "Adi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 5,
      name: "Surya",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 8,
      name: "Edi",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 7,
      name: "Dede",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 3,
      name: "Bayu",
    },
    class: {
      class_id: 2,
      name: "B",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 2,
      name: "Budi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 4,
      name: "Dharma",
    },
    class: {
      class_id: 2,
      name: "B",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 3,
      name: "Maha",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
];

function formattedArray(input) {
  //buat mapkosongnyaa
  const sessionMap = {};

  //diloop arraynya untuk setiap item
  input.forEach((item) => {
    //dibikin key supaya kedata di mapnya, key 1 itu session 1 dan datanya
    const sessionKey = item.session_id;

    //kalau ga ada sessionnya, dibuat dulu
    if (!sessionMap[sessionKey]) {
      sessionMap[sessionKey] = {
        session_id: sessionKey,
        time: item.time,
        classes: {},
      };
    }

    //didata session itu apa, dimana sessiionmap dari setiap key udh keisi dari atas
    const session = sessionMap[sessionKey];
    // console.log(session);
    // dibikin key buat kelasnya juga karena makin dalem
    const classKey = item.class.class_id;

    //ditambahin untuk setian CLASSES didalem session itu diisi datanya sesuai classnya
    if (!session.classes[classKey]) {
      session.classes[classKey] = {
        class_id: classKey,
        name: item.class.name,
        students: [],
      };
    }

    //tambahin studentsnya tinggal dipush karena udh array of object
    session.classes[classKey].students.push({
      student_id: item.student.student_id,
      name: item.student.name,
    });
  });
  //ARRAYnya diubah jadi ARRAY, pakai Object.values(objeknya)
  const res = Object.values(sessionMap).map((item) => {
    return {
      session_id: item.session_id,
      time: item.time,
      //classesnya juga diubah jadi array
      classes: Object.values(item.classes),
    };
  });

  //SORT per sesinya
  res.sort((a, b) => a.session_id - b.session_id);
  //DILOOP PER SESINYA
  res.forEach((session) => {
    //SORT per KELASNYA
    session.classes.sort((a, b) => a.class_id - b.class_id);

    // console.log(session);
    //DILOOP PER KELASNYA
    session.classes.forEach((cls) => {
      //SORT PER STUDENTNYA
      cls.students.sort((a, b) => a.student_id - b.student_id);
    });
  });

  console.dir(res, { depth: null });
}

// formattedArray(input);

//================================================================================================================
/*
Instead of new Map(), I'm using empty objects {}
Instead of map.has(key) and map.get(key), I'm using object[key]
Instead of map.set(key, value), I'm using object[key] = value
Instead of Array.from(map.values()), I'm using Object.values(object)
*/
//================================================================================================================

//! CARA BIKIN PAKAI MAP.
function formatArrayMap(input) {
  let sessionMap = new Map();

  //loop dulu tiap item di arraynya, dipecah
  input.forEach((item) => {
    //kasih key biar bisa dipatokin per sesinya sebagai object Map diatas yang punya key
    const sessionKey = item.session_id;

    //kalo ga ada tambah sesi
    if (!sessionMap.has(sessionKey)) {
      sessionMap.set(sessionKey, {
        session_id: sessionKey,
        time: item.time,
        classes: new Map(),
      });
    }

    //dijadiin variable biar jelas, bahwa satu SESI itu adalah sessionMap[sessionKey]
    const session = sessionMap.get(sessionKey);
    // console.log(session);

    //kasih key buat class juga soalnya dalem
    const classKey = item.class.class_id;
    //kalau gada class buat
    if (!session.classes.has(classKey)) {
      session.classes.set(classKey, {
        class_id: classKey,
        name: item.class.name,
        students: [],
      });
    }

    // console.log(session);
    //tambahin studentnya juga, karena pakai Map, harus pake get sama set
    session.classes.get(classKey).students.push({
      student_id: item.student.student_id,
      name: item.student.name,
    });
  });

  //diluar foreachnya, buat resultnya, dijadiin array pake Array.from(<namaobjectmapnya>.values())
  //terus dimap ulang juga supaya classes didalemnya juga bisa dijadiin array
  let res = Array.from(sessionMap.values()).map((ses) => {
    return {
      session_id: ses.session_id,
      time: ses.time,
      classes: Array.from(ses.classes.values()),
    };
  });

  res.sort((a, b) => a.session_id - b.session_id);
  res.forEach((ses) => {
    ses.classes.sort((a, b) => a.class_id - b.class_id);
    ses.classes.forEach((cls) => {
      cls.students.sort((a, b) => a.student_id - b.student_id);
    });
  });

  console.dir(res, { depth: null });
}

formatArrayMap(input);
