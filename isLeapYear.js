"use strict";

/** this is a comment */

function isDivisibleBy(n, factor) {
  return n % factor === 0;
}

// function isDivisibleBy100(k) {
//   return k % 100 === 0;
// }

function isLeapYear(n, factor) {
  return isDivisibleBy(n, factor);
}

module.exports = isLeapYear;
