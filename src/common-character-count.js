const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let charCount1 = {};
  let charCount2 = {};

  // Count occurrences of each character in s1
  for (let char of s1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count occurrences of each character in s2
  for (let char of s2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  let commonCount = 0;

  // Calculate the sum of minimum occurrences in both strings
  for (let char in charCount1) {
    if (charCount2[char]) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
