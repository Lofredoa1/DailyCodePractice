// Given a string, find the leftmost digit that occurs.

function firstDigit(inputString) {
    let x = inputString.split("");
    for (let i = 0; i < x.length; i++) {
        if (isNaN(x[i]) === false && x[i] !== " ") {
            return x[i]
        };
    };
};

const inputString = "sdf1sgifg as_hiouh2"

console.log(firstDigit(inputString))
