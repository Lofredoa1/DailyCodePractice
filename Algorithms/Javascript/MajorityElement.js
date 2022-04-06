//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
    let count = {};
    
    for(n of nums){
        count[n] ? count[n]++ : count[n] = 1;
        if(count[n] > nums.length / 2 )  return n;
    }
    return -1;
};

console.log(majorityElement([4,5,4,4,6,8,3,4,6,4,4]))