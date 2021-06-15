//  @param {number[]} nums
//  @param {number[]} index
//  @return {number[]}

// Given two arrays of integers nums and index.Your task is to create target array under the following rules:

// Set target array to empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
 
var createTargetArray = function (nums, index) {
    return nums.reduce((acc, curr, idx) => {
        acc.splice(index[idx], 0, curr)
        return acc
    }, [])
};