//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length; i++){
        result ^= nums[i];
    };
    return result
};

const nums = [2,6,2,4,8,7,8,1,4,6,1];

console.log(singleNumber(nums))