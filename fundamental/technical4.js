const sample = ["flower", "flow", "flight"];

function findPrefix(arr) {
  //edge casenya kalau
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  //mulai pakai string pertama buat prefixnya
  let prefix = arr[0];

  //compare sama setiap string yang ada
  for (let i = 1; i < arr.length; i++) {
    //untuk setiap string, dipendekin sampai hurufnya match sama string sekarang

    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      //   console.log(prefix);

      //tapi kalau jadi kosong g ada common prefix
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

/*
Time Complexity: O(S), where S is the sum of all characters in all strings. In the worst case, we might need to compare each character of each string.

Space Complexity: O(1) extra space, as we only use a single variable to store the prefix.
*/

//* atau bisa juga gini, lebih intuitif
function findPrefixInt(arr) {
  if (arr.length === 0) return "";

  //pertama cari minlength
  let lengths = arr.map((s) => s.length);
  let minLength = Math.min(...lengths);
  let res = "";

  //dicompare karakternya di setiap posisi
  for (let i = 0; i < minLength; i++) {
    const char = arr[0][i];
    // console.log(char);
    if (arr.every((str) => str[i] === char)) {
      res += char;
    } else {
      break;
    }
    // console.log(res);
  }
  return res;
}

console.log(findPrefix(sample));
console.log(findPrefixInt(sample));
