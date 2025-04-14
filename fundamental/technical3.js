let sample = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// const findMissing = (arr) => {
//   arr.sort((a, b) => a - b);

//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i) {
//       res = i;
//     }
//   }
//   return res;
// };
//! my answer has a logical error, if there are plenty of arr[i] !== i, it will return the last and be silly

/*
Time Complexity Analysis

Sorting the array: O(n log n)
Iterating through the array once: O(n)
Overall time complexity: O(n log n) since sorting dominates

Space Complexity Analysis

The sorting operation in JavaScript typically requires O(log n) auxiliary space
Besides that, you're only using a constant amount of extra space (the res variable)
Overall space complexity: O(log n)

sama kyk sebelumnya
*/

//! a more efficient method is mathematical
function findMissing(arr) {
  const n = arr.length;
  //the product of N by N+1 divided by two is ALWAYS the sum of all the items in the array (WHY??)
  const expectedSum = (n * (n + 1)) / 2;
  //then REDUCE the array to a single sum
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  //the zero is the starting index no need

  //minus the difference
  return expectedSum - actualSum;
}
//* this solution is MUCH more efficient because time conplexity is O(n), the array is looped once with the reduce, and the space complexity is constant O(1)

//? alternatively, we can also use a Set for a more clear code
function findMissingWithSet(arr) {
  const set = new Set(arr);

  //loop the array once
  for (let i = 0; i < arr.length; i++) {
    //if the set DOES NOT have a specific index, return that index
    if (!set.has(i)) {
      return i;
    }
  }
  return -1; //no missing number found
}
// this one has both constant time and space of O(n) an extra space is required with the same amount as the original array.

console.log(findMissing(sample));
console.log(findMissingWithSet(sample));
