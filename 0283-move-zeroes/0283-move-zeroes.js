/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            // swap
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
};

console.log([0,1,0,3,12])