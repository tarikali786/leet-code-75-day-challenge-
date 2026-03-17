/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {};

    // Step 1: Count frequency
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 2: Sort based on frequency
    const sorted = Object.keys(freqMap).sort((a, b) => {
        return freqMap[b] - freqMap[a];
    });

    // Step 3: Return top k elements
    return sorted.slice(0, k).map(Number);
};
console.log(topKFrequent([1,1,1,2,2,3], 2)); 