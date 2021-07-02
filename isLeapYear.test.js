"use strict";

const isLeapYear = require("./isLeapYear.js");

test("correctly detects leap years", () => {
  expect(isLeapYear(4, 3)).toBe(false);
  expect(isLeapYear(8, 4)).toBe(true);
});
