/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const  arrayValue = [1,1,1,3,3,4,3,2,4,2]
var containsDuplicate = function(nums) {
    let seen = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true
        }
        seen.add(nums[i])
    }

    return false
};

const result = containsDuplicate(arrayValue)
console.log(result)