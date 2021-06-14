//  Leetcode 1470 shuffle the array

//  break it down like this:
//  the array 'nums' is made up of two arrays joined together
//  [1,2,3,4]
//  seperate the array in to two seperate news
//  array x [1,2]
//  array y [3,4]
//
//  recombine the array so that the new array is put together like this:
//  x[0], y[0], x[1],y[1]

//  output [1,3,2,4]

//  optimal solution is two use the two pointer system
//  p1 to the start of the first subarray
//  p2 to the start of the second subarray 
//  where n is the index p2 should be at

var shuffle = function(nums, n) {
    let p1 = 0 
    let p2 = n
    
    const result = []
    while(p1<n){
        result.push(nums[p1])
        result.push(nums[p2])
        p1++
        p2++
    }
    return result
};