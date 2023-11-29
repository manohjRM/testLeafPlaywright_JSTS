/*
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
// let nums1 = [1,2,2,1], nums2 = [2,2]
let match = []
if (nums1.length != 0 || nums2.length != 0) {
    for (let index = 0; index < nums1.length; index++) {
        if(nums1.includes(nums2[index])){
            if(!match.includes(nums2[index])){
                match.push(nums2[index]);
            }
        }
    }
}
console.log(match);
/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let numbers = [34, 7, 21, 89, 54, 10, 91, 67];
let max = numbers[0], min = numbers[0];
let maxInd = 0, minInd = 0;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i];
        maxInd = i;
    }
    if(numbers[i] < min){
        min = numbers[i];
        minInd = i;
    }
}
console.log(`Maximum Element: ${max}, Index: ${maxInd}`)
console.log(`Minimum Element: ${min}, Index: ${minInd}`)


/*
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let resultArray = [];
for (let index = 0; index < inputArray.length; index++) {
    if(!resultArray.includes(inputArray[index])){
        resultArray.push(inputArray[index])
    }
}
console.log(resultArray)


/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
let nums = [0,1,0,3,12]
// let nums = [0]
let numsMZeros = []
if (nums.length != 1 || nums.length != 0){
    for (let index = 0; index < nums.length; index++) {
        if(nums[index]!=0){
            numsMZeros.push(nums[index])
        }
    }
    let numZeros = nums.length - numsMZeros.length
    for (let index = 0; index < numZeros; index++) {
        numsMZeros.push(0)
    }
}else{
    numsMZeros = nums
}
console.log(numsMZeros)

