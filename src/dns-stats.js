const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsCounts = {};

  domains.forEach((domain) => {
    // Split domain into parts and reverse the order
    let parts = domain.split(".").reverse();
    let key = "";

    // Build the DNS keys iteratively
    parts.forEach((part) => {
      key += `.${part}`;
      dnsCounts[key] = (dnsCounts[key] || 0) + 1;
    });
  });

  return dnsCounts;
}

module.exports = {
  getDNSStats,
};
