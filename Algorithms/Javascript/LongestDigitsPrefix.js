// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(input){
    return input.match(/^\d*/)[0]
}

const inputString = "12abc34";

console.log(longestDigitsPrefix(inputString))