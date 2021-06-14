// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//  Leetcode Two Sum

var twoSum = function (nums, target) {
    const store = {}
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let diff = target - cur
        if (store[cur] !== undefined) return [store[cur], i]
        else store[diff] = i
    }
};