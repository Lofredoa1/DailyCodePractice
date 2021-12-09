// Given a divisor and a bound, find the largest integer N such that: 
// 1. N is divisible by divisor.
// 2. N is less than or equal to bound.
// 3. N is greater than 0.

function maxMultiple(divisor, bound){
    let n = bound;
    while (n <= bound){
        if (n % divisor == 0){
            return n
        } else {
            n--
        }
    }
}


let divisor = 9;
let bound = 60;

console.log(maxMultiple(divisor, bound))