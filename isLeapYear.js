"use strict";

/** this is a comment */

function isDivisibleBy(n, factor) {
  return n % factor === 0;
}

function isCenturyException(k) {
  return isDivisibleBy(k, 100) && !isDivisibleBy(k, 400);
}

function isLeapYear(n) {
  return isCenturyException(n);
}

// console.log(isDivisibleBy(2400, 100) && !isDivisibleBy(2400, 400));

module.exports = isLeapYear;
