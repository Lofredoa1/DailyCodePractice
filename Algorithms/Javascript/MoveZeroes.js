//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums){
    if(nums.length === 0) return 0;
    let zeroCount = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[zeroCount] = nums[i];
            zeroCount++;
        }
    }
    for(let i = zeroCount; i < nums.length; i++){
        nums[i] = 0;
    }            
    return nums
};

const input = [0,1,0,3,12];

console.log(moveZeroes(input))