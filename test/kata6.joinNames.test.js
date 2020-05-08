const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
  });

  expect(
    joinNames([
      { name: "A" },
      { name: "b" },
      { name: "C" },
      { name: "d" },
      { name: "2" },
      { name: "fd" },
      { name: "HI" },
      { name: "gaa" },
      { name: "Lollypop" },
      { name: "F" },
      { name: "Dog" },
      { name: "Cat" },
    ])
  ).toBe("A, b, C, d, 2, fd, HI, gaa, Lollypop, F, Dog & Cat");
});
