//There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

//Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

//Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

//You must decrease the overall operation steps as much as possible.

const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + parseInt((right - left) / 2); 
       
        if (nums[mid] == nums[right]) right--; 
        else if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid
        } else{
            if (target > nums[mid] || target < nums[left]) left = mid + 1;
            else right = mid;
        } 
    }
    return nums[left]==target;
};

console.log(search([2,3,5,6,0,0,1,2], 3))