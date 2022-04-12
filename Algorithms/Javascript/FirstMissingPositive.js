//Given an unsorted integer array nums, return the smallest missing positive integer.

//You must implement an algorithm that runs in O(n) time and uses constant extra space.


const firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = nums[i]-1;
        
        if (i == j || nums[i] == nums[j]) continue; // already positioned or nums[i] is a duplicate
        if (j >= 0 && j <= nums.length - 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i--; // check the swapped number
        };
    };
     
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1; // the next positive number which is i+1 doesn't exist in the array
    }
     
    return nums.length + 1; // the array is [1,2,...,n]
 };

 console.log(firstMissingPositive([3,4,-1,1]))
 