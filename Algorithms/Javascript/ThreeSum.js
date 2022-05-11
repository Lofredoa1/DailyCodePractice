//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//Notice that the solution set must not contain duplicate triplets.
//Example:
//Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]

const threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b
    });
    let result = [];
    
    for (let index1 = 0; index1 < nums.length - 2; index1++) {
        if (index1 > 0 && nums[index1] == nums[index1 - 1]) {
            continue
        };
        
        let index2, index3;
        [index2, index3] = [index1 + 1, nums.length - 1];
        
        while (index2 < index3) {
            let sum = nums[index1] + nums[index2] + nums[index3];
            
            if (sum == 0) {
                result.push([nums[index1], nums[index2], nums[index3]])
                index3--
                
                while (index2 < index3 && nums[index3] == nums[index3 + 1]) {
                    index3--
                }} else if (sum > 0) {
                    index3--} else index2++
            
        };
    };
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))