const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return ""; // Handle empty string case

  let encodedStr = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++; // Count consecutive same characters
    } else {
      encodedStr += (count > 1 ? count : "") + str[i]; // Append count only if > 1
      count = 1; // Reset count for next character
    }
  }

  return encodedStr;
}
module.exports = {
  encodeLine,
};
