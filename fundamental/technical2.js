let sample = [1, 4, 2, 3, 5, 3, 2, 4];

function removeDuplicateOri(arr) {
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 0;
    }
    map[arr[i]]++;
    if (map[arr[i]] > 1) {
      continue;
    } else {
      res.push(arr[i]);
    }
  }
  res.sort((a, b) => a - b);
  return res;
}

//* better:
// function removeDuplicate(arr) {
//     const map ={}
//     const res = []

//     for (const num of arr) {
//         if (!map[num]) {
//             map[num] = true
//             res.push(num)
//         }
//     }
//     return res.sort((a,b)=> a-b)
// }
//*

/* Time Complexity Analysis

The for loop iterates through the array once: O(n)
The sorting operation at the end is O(n log n)
Overall time complexity: O(n log n) since the sorting dominates

Space Complexity Analysis

map object stores each unique value: O(k) where k is the number of unique elements
res array also stores each unique value: O(k)
Overall space complexity: O(k), which simplifies to O(n) in the worst case
*/

//* even better
function removeDuplicate(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);

  //THE TIMESPACE COMPLEXITY IS THE SAME O(nlogn) BECAUSE of the sort, if you dont need to sort it, complexity is o(n)

  //sorting in JS is quicksort or mergesort which uses a divide and conquer strat, repeatedly dividing to sub arrays and sorting them before combining the res, array is divided into roughly half in each step, which is recursive, ngulang terus dan kedalamannya log n (n adalah array length)

  //karena digabung O(logn)(sort) dan O(n)(looping) jadinya O(nlogn)
}

console.log(removeDuplicateOri(sample));
console.log(removeDuplicate(sample));
