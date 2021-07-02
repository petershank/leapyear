"use strict";

/** this is a comment */

function isDivisibleBy(n, factor) {
  return n % factor === 0;
}

function isCenturyException(k) {
  return isDivisibleBy(k, 100) && !isDivisibleBy(k, 400);
}

function isLeapYear(n) {
  return isDivisibleBy(n, 4) && !isCenturyException(n);
}

module.exports = isLeapYear;
