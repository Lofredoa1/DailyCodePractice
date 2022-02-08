// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigits(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9
};

console.log(addDigits(12345))