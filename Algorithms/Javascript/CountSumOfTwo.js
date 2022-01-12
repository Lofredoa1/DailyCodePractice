// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

//For n = 6, l = 2, and r = 4, the output should be solution(n, l, r) = 2.

//There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

function countSumOfTwo(n, l, r) {
    let count = 0;
    for (let i =l; i <= n/2; i++) {
        if (n - i <= r) {
            count += 1;
        }
    }
    return count
};

const n = 24;
const l = 8;
const r = 16;

console.log(countSumOfTwo(n, l, r))