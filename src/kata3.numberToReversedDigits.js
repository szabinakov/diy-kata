const numberToReversedDigits = number => {
const theThing = Array.from(number.toString()).map(Number);
return theThing.reverse();

};

module.exports = numberToReversedDigits;
