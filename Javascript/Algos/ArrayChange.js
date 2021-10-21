// Given an array of integers, find out how many times you would need to increase exactly one element by 1 until the array is strictly increasing

const arrayChange = (inputArray) => {
    let i = 0;
    let count = 0;
    let arr = inputArray
    for (i=0; i < arr.length; i++){
        while (arr[i+1] <= arr[i]){
            arr[i+1] += 1
            count += 1
        }
    }
    return count
}

console.log(arrayChange([1,4,9,2,4,17,9,67]))