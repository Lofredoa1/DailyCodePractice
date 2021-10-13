// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const adjacentElementProduct = (arr) => {
    let maxNum = arr[0] * arr[1];
    for (i=0; i < arr.length; i++){
        let testNum = arr[i] * arr[i+1];
        if (testNum > maxNum){
            maxNum = testNum
        }
    }
    return maxNum
}

console.log(adjacentElementProduct([1,2,10,4,5]))