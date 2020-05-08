const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.');
    expect(reachDestination(60, 23)).toBe('I should be there in 2.5 hours.');
    expect(reachDestination(100, 70)).toBe("I should be there in 1.5 hours.");
  });
});
