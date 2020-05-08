const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  expect(booleanToWord(true)).toBe("Yes");
  expect(booleanToWord(false)).toBe("No");
    // how do we create specs again???
});
