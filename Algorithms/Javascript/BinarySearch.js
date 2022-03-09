// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

const binarySearch = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;  
    
    while (low < high) {
        let mid = low + Math.floor((high - low + 1)/2);
        
        if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid;
        };
    };
    return nums[low] === target ? low : -1
};


const nums = [-1,0,3,5,9,12,17,23,34,45,56,78]

console.log(binarySearch(nums, 56))