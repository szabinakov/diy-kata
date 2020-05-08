const humanCatDogYears = number => {
    const catYears = 15 + 9 + ((number-2) * 4);
    const dogYears = 15 + 9 + ((number-2) * 5);
    const theArray = [number, catYears, dogYears];
    return theArray;
};

module.exports = humanCatDogYears;
