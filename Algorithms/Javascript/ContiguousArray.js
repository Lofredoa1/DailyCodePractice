//Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

const findMaxLength = function(nums) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? sum-- : sum++;

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
  return maxLen;
};

console.log(findMaxLength([0,1,0,0,0,0,0,0,1]))