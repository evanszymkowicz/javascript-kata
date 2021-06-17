//  Leetcode 26
//  Given an integer array nums sorted in non - decreasing order remove the duplicates in place such that each unique element appears only once.
//  The relative order of the elements should be kept the same.

//  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
//  More formally if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.It does not matter what you leave beyond the first k elements.

//  Return k after placing the final result in the first k slots of nums.

//  Do not allocate extra space
//  for another array. You must do this by modifying the input array in -place with O(1) extra memory.

//  two pointer solution

var removeDuplicates = funciton(nums) {
    if (nums.length <= 1) return nums.length;
    let left = 0;   //  the first number in the array occupied the first index
    let right = left + 1;   //  the last number in the array occupies the last index
    const end = nums.length - 1;    //  the end of the array is the last index

    while (right <= end) {  //  sort the array from left to right
        if (nums[left] === nums[right]) {
            right ++;
        } else {
            left++;
            nums[left] = nums[right];
            right++;
        }
    }
    return left + 1;
};