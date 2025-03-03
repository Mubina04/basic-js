const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let nameCounts = {}; // Hashmap to track name occurrences
  let result = [];

  for (let name of names) {
    if (nameCounts[name] !== undefined) {
      // If name exists, append suffix (k)
      let newName;
      let k = nameCounts[name];

      do {
        newName = `${name}(${k})`;
        k++;
      } while (nameCounts[newName] !== undefined);

      result.push(newName);
      nameCounts[name]++; // Increment original name counter
      nameCounts[newName] = 1; // Register new unique name
    } else {
      // If name is new, add as is
      result.push(name);
      nameCounts[name] = 1;
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
