let sample1 = "abc";
let sample2 = "abcd";

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let sort1 = word1.split("").sort().join("");
  let sort2 = word2.split("").sort().join("");

  return sort1 === sort2;
}

console.log(isAnagram(sample1, sample2));
