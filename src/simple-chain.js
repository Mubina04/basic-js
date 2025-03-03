const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [], // Stores the chain links

  getLength() {
    return this.chain.length; // Returns the length of the chain
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )"); // If no value is provided, add an empty link
    } else {
      this.chain.push(`( ${value} )`); // Add value as a link
    }
    return this; // Return 'this' for chaining
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) || // Check if position is an integer
      position < 1 || // Position should be >= 1
      position > this.chain.length // Position should not exceed chain length
    ) {
      this.chain = []; // Reset chain
      throw new Error("You can't remove incorrect link!"); // Throw an error
    }
    this.chain.splice(position - 1, 1); // Remove the link at the given position
    return this; // Return 'this' for chaining
  },

  reverseChain() {
    this.chain.reverse(); // Reverse the chain
    return this; // Return 'this' for chaining
  },

  finishChain() {
    const result = this.chain.join("~~"); // Join links with '~~'
    this.chain = []; // Reset the chain
    return result; // Return final chain string
  },
};

module.exports = {
  chainMaker,
};
