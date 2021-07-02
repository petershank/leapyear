"use strict";

const isLeapYear = require("./isLeapYear.js");

test("correctly detects leap years", () => {
  expect(isLeapYear(1800)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
  expect(isLeapYear(2000)).toBe(true);
  expect(isLeapYear(1996)).toBe(true);
  expect(isLeapYear(1997)).toBe(false);
});
