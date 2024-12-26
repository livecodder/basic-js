const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  const { length } = digits;

  let tempN = +digits.slice(1).join('');

  for (let i = 1; i < length; i += 1) {
    const withoutDigit = [...digits.slice(0, i), ...digits.slice(i + 1)];
    const nextN = +withoutDigit.join('');

    if (nextN > tempN) tempN = nextN;
  }

  return tempN;
}

module.exports = {
  deleteDigit,
};
