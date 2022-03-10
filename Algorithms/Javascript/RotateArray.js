// Given an array, rotate the array to the right by k steps, where k is non-negative.

//Solution #1
//Use extra array
//Time O(n)
//Space O(n)

// function rotateArray(nums, k) {
//     let len = nums.length;
//     let result = new Array(len);
    
//     for(let i = 0; i < len; i++) {
//         result[(i+k) % len] = nums[i]
//     };
    
//     for(let i = 0; i < len; i++) {
//         nums[i] = result[i]
//     };
//     return nums
// };

//Solution #2
    //Divide array into 2 parts
    // k = k% length
    // first part 0 => k-1
    // second part k => length - 1
    // step 1 : reverse whole array
    // step 2: reverse 1st part
    // step 3: reverse 2nd part
// Time: O(n)
// Space O(1)

function rotateArray(nums, k) {
    let len = nums.length;
    k = k % len;
    
    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++, end--;
        };
    };

    reverse(nums, 0, len -1);
    reverse(nums, 0, k-1);
    reverse(nums, k, len - 1);

    return nums
};

console.log(rotateArray([1,2,3,4,5,6,7], 4))