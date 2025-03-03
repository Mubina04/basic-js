const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map((row) => row.map(() => 0)); // Initialize result matrix with 0s

  let rows = matrix.length;
  let cols = matrix[0].length;

  // Directions array to check all 8 neighbors
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1], // Top-left, Top, Top-right
    [0, -1],
    [0, 1], // Left, Right
    [1, -1],
    [1, 0],
    [1, 1], // Bottom-left, Bottom, Bottom-right
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        // If current cell is a mine, increment all its neighbors
        for (let [dx, dy] of directions) {
          let x = i + dx;
          let y = j + dy;

          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            result[x][y]++; // Increase count of neighboring mines
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
