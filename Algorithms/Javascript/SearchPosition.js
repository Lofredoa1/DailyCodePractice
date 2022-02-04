// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchPosition (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid
        // if middle pointer is higher than the target decrease right pointer by 1
        else if (nums[mid] > target) {
            right = mid - 1;
        } 
        // if middle pointer is lower than the target increase left pointer by 1
        else {
            left = mid + 1;
        }
    };
    // if the number is not in the given array return the left pointer where the num should be inserted
    return left
};

console.log(searchPosition([1,2,3,4,5,7,8,11,23,44,45,52], 8))