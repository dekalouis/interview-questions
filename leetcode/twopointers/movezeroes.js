// Move zeroes, for an array of integer, move all the zeroes to the end of the array, while maintaining the rest of the data where they are, DO NOT RETURN ANYTHING, it should do this in place.

let nums = [0, 1, 0, 3, 12];
//output should be [1,3,12,0,0]

function moveZero(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let temp = [];
  let zeroes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
    if (arr[i] === 0) {
      zeroes.push(arr[i]);
    }
  }
  arr = temp.concat(zeroes);
  return arr;
}

console.log(moveZero(nums));

//!WRONG WRONG WRONG
