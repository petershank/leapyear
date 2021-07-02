"use strict";

const isLeapYear = require("./isLeapYear.js");

test("correctly detects leap years", () => {
  expect(isLeapYear(2)).toBe(3);
});
