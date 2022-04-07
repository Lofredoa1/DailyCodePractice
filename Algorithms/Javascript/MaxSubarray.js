//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

function maxSubarray(nums){
    if(nums.length === 0) return 0;
    
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
};

const input = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubarray(input))