// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// function arrayMaxConsecutiveSum(inputArray, k) {
//     let total = 0;
//     for (let i = 0; i < inputArray.length; i++) {
//         let temp = 0;
//         for (let j = i; j < i + k; j++){
//             temp = temp + inputArray[j]
//         }
//         if (temp > total) {
//             total = temp
//         }
//     }
//     return total
// }

function arrayMaxConsecutiveSum(inputArray, k) {

    let total = inputArray.slice(0,k).reduce((a,b)=>a+b);
    let temp = total;
    for(let i = k; i < inputArray.length; i++) {
        temp = temp + inputArray[i] - inputArray[i-k];
        if(temp > total)
            total = temp
    }
    return total
}

const inputArray = [1, 3, 4, 2, 4, 2, 4];
const k = 4;

console.log(arrayMaxConsecutiveSum(inputArray, k))