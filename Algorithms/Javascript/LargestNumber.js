// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
  return Math.pow(10,n) - 1
}

const n = 3;

console.log(largestNumber(n))