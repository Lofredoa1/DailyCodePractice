// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

function intersection (nums1, nums2) {
    let setNums1 = new Set(nums1);
    let result = [];
    
    for (let i = 0; i < nums2.length; i++) {
        if (setNums1.has(nums2[i]) && !result.includes(nums2[i])) result.push(nums2[i])
    }
    return result 
};

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

console.log(intersection(nums1, nums2))