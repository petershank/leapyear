"use strict";

const isLeapYear = require("./isLeapYear.js");

test("correctly detects leap years", () => {
  expect(isLeapYear(1800)).toBe(true);
  expect(isLeapYear(1900)).toBe(true);
  expect(isLeapYear(2000)).toBe(false);
  expect(isLeapYear(2100)).toBe(true);
});
