let input = "HELLO";

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}
console.log(removeVowels(input)); // "hll"

function removeVowelsTwo(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!/[aeiou]/i.test(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeVowelsTwo(input)); // "hll"
