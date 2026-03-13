/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const  arrayValue = [1,1,1,3,3,4,3,2,4,2]
var containsDuplicate = function(nums) {
    const unique = new Set(nums);
    return unique.size !== nums.length;
};

const result = containsDuplicate(arrayValue)
console.log(result)