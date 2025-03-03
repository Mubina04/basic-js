const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract all non -1 values and sort them
  const sortedHeights = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  let index = 0; // Pointer for sorted values

  return arr.map((num) => (num === -1 ? num : sortedHeights[index++]));
}

module.exports = {
  sortByHeight,
};
