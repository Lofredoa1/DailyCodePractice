// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverseInteger(x) {
    const reverse = Math.abs(x).toString().split('').reverse().join('');
    if (reverse > Math.pow(2, 31)) return 0
    if (x < 0) return reverse* -1
    return reverse
};

console.log(reverseInteger(-785421))