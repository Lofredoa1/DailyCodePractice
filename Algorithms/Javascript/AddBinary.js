// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a,b) {
    const num = parseInt(a,"2") + parseInt(b, "2");
    return num.toString(2)
}

const a = 101010;
const b = 1;

console.log(addBinary(a,b))
