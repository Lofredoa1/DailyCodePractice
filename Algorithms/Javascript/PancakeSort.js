//Given an array of integers arr, sort the array by performing a series of pancake flips.

//In one pancake flip we do the following steps:

//Choose an integer k where 1 <= k <= arr.length.
//Reverse the sub-array arr[0...k-1] (0-indexed).
//For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.

//Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.

const pancakeSort = function(arr) {
    let sortingIndex = arr.length - 1;
    let result = [];
    while (sortingIndex != 0) {
        for (let i = sortingIndex; i >= 0; i--) {
            //if sorted index number is in correct place there is no need to sort
            if (arr[sortingIndex] === sortingIndex + 1) break
            if (arr[i] === sortingIndex + 1) {
                let arrayToIndexNum = arr.splice(0, i+1).reverse();
                arr.splice(0, 0, ...arrayToIndexNum);
                result.push(i + 1);
                let arrayFromIndexNum = arr.splice(0, sortingIndex + 1).reverse();
                arr.splice(0, 0, ...arrayFromIndexNum);
                result.push(sortingIndex + 1);
                break
            }
        }
        sortingIndex--;
    }
    return result
};

console.log(pancakeSort([3,2,4,1]))

//Expected output = [3,4,2,3,1,2]