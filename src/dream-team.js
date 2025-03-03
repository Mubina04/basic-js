const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; // Ensure input is an array

  let initials = [];

  members.forEach((item) => {
    if (typeof item === "string") {
      let trimmedName = item.trim(); // Remove extra spaces
      if (trimmedName.length > 0) {
        initials.push(trimmedName[0].toUpperCase()); // Get first letter
      }
    }
  });

  return initials.sort().join("");
}

module.exports = {
  createDreamTeam,
};
