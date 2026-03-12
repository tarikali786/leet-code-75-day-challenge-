/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const inputArray =[2,7,11,15]
const target = 9
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (target === nums[i] + nums[j]) {
                return [i, j]
            }

        }

    }

    return []

};


const result = twoSum(inputArray, target)
console.log(result)