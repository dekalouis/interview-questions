let input1 = [1, 3, 5];
let input2 = [1, 3, 3];
let input3 = [2, 4, 6];
let input4 = [1, 2, 3, 5, 7];
let input5 = [1, 9, 11];

function hasUniqueOddSum(numbers) {
  let oddNum = numbers.filter((num) => num % 2 !== 0);
  //   console.log(oddNum, `cek`);
  if (oddNum.length === 0) return false;

  const oddSet = new Set(oddNum);
  if (oddSet.size !== oddNum.length) return false;

  const sum = oddNum.reduce((acc, cur) => acc + cur);
  //   console.log(sum);

  return sum % 2 !== 0;
}

console.log(hasUniqueOddSum(input1));
console.log(hasUniqueOddSum(input2));
console.log(hasUniqueOddSum(input3));
console.log(hasUniqueOddSum(input4));
console.log(hasUniqueOddSum(input5));
