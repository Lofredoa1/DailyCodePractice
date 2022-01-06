// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let total = 0;
    for(i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            count = 0;
        } else {
            count += 1;
        }
        if (count > total) total = count 
    }
    return total
}

const nums = [0,1,0,1,1,1,0,1,1,1,1]

console.log(findMaxConsecutiveOnes(nums))
