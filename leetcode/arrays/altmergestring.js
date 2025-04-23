let word1 = "abc";
let word2 = "pqr";
let word3 = "ab";
let word4 = "pqrs";

//2 pointers
function mergeString(input1, input2) {
  let res = "";
  const m = input1.length;
  const n = input2.length;
  let i = 0; //pointers
  let j = 0; //pointers

  //keep looping as long as the pointers are less than the length
  while (i < m || j < n) {
    //if the pointer is still less than the length, add the character at each adding pointers to the res
    if (i < m) {
      res += input1.charAt(i++);
    }
    if (j < n) {
      res += input2.charAt(j++);
    }
  }
  return res;
}
/* time complexity is O(m+n) because each string is iterated ONCE and pushed into the res
space is O(1) because only 1 constant space required for result
 */

console.log(mergeString(word1, word2), `- contoh abc dan pqr`);
console.log(mergeString(word3, word4), `- contoh ab dan pqrs`);

//single pointer
function mergeStringOne(input1, input2) {
  let res = "";
  const m = input1.length;
  const n = input2.length;

  //loop from 0 to the MAXIMUM length of both string
  for (let i = 0; i < Math.max(m, n); i++) {
    //if the pointer is STILL less than the length add to res the char at pointer "i"
    if (i < m) {
      res += input1.charAt(i);
    }
    if (i < n) {
      res += input2.charAt(i);
    }
  }

  return res;
}

/* time complexity is O(m+n) because each string is iterated ONCE and pushed into the res
space is O(1) because only 1 constant space required for result
 */

console.log(
  mergeStringOne(word1, word2),
  `- contoh single pointer abc dan pqr`
);
console.log(
  mergeStringOne(word3, word4),
  `- contoh single pointer ab dan pqrs`
);
