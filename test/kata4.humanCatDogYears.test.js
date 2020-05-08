const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
    it ("returns array of human, cat and dog years when passed human years", ()=>{
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    expect(humanCatDogYears(12)).toStrictEqual([12, 64, 74]);
    expect(humanCatDogYears(52)).toStrictEqual([52, 224, 274]);
    })
});
