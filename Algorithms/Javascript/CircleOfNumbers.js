// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Constraints: A positive even integer.
// Guaranteed constraints: 4 ≤ n ≤ 20.

function circleOfNumbers(n, firstNumber) {
    let dist = n/2
    let total = dist + firstNumber
    if (total > n){
        return total - n
    } else if (total == n){
        return 0
    } else {
        return dist + firstNumber
    }
}

const n = 10;
const firstNumber = 2

console.log(circleOfNumbers(n, firstNumber))