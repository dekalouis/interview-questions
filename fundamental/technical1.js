let sample = [
  {
    session_name: "first test",
    classes: [
      {
        class_name: undefined,
        students: [
          {
            name: "Jhon",
          },
        ],
      },
    ],
  },
  {
    session_name: null,
    classes: [
      {
        class_name: "second class",
        students: [
          {
            student_name: "Doe",
          },
        ],
      },
    ],
  },
];

function removeUndef(input) {
  // handle arraynya dahulu
  if (Array.isArray(input)) {
    return input.map((item) => removeUndef(item));
  }

  //handle objectnya

  if (typeof input === "object" && input !== null) {
    const cleaned = {};

    //kalau undefined, diremove lanjut aja
    for (let key in input) {
      if (input[key] === undefined || input[key] === null) {
        continue;
      }

      //kalau ada valuenya, ditambahin ke cleaned, dan pake functionnya didalamnya supaya bisa recursive untuk sub object
      cleaned[key] = removeUndef(input[key]);
    }
    return cleaned;
  }
  //return lg objectnya
  return input;
}

//harus console dir depth null
let res = removeUndef(sample);
console.dir(res, { depth: null });

/* Time Complexity: O(n)

The function traverses every element in the input data structure exactly once
For arrays, it maps over each element
For objects, it iterates through each key-value pair
Each operation inside the loops (checking for null/undefined, assignment) is O(1)

Where n is the total number of elements (including properties at all levels) in the data structure.

Space Complexity: O(n)

The function creates new objects and arrays for the cleaned data
In the worst case, if no elements have null/undefined values, the output structure will be the same size as the input
The recursion also uses call stack space proportional to the maximum depth of the data structure, but this is generally less significant than the space for the data itself

The space complexity is O(n) where n represents the size of the input data structure, minus any null/undefined values that are removed.

This is an efficient implementation since we need to examine every element at least once to determine if it should be kept or removed, and we need to create a new structure to hold the cleaned data.RetryClaude can make mistakes. Please double-check responses.
*/
