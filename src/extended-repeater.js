const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */ function repeater(str, options) {
  str = String(str); // Ensure str is a string
  let addition = options.addition !== undefined ? String(options.addition) : "";

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator !== undefined ? options.separator : "+";

  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";

  // Create repeated addition string
  let additionPart = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Create repeated main string with addition
  let result = Array(repeatTimes)
    .fill(str + additionPart)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
