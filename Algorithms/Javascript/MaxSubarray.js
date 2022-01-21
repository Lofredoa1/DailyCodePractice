//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

function maxSubarray(nums){
    let maxSum = nums[0];
    let current = nums[0];
    if(nums.length === 0) return 0;
    
    for (let i = 0; i < nums.length; i++){
        current = Math.max(nums[i], current + nums[i]);
        maxSum = Math.max(maxSum, current)
    }
    return maxSum
};

const input = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubarray(input))