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
function arrIntersect(num1, num2) {
    let match = []
    if (num1.length != 0 || num2.length != 0) {
        for (let index = 0; index < num1.length; index++) {
            if(num1.includes(num2[index])){
                //Each element in the result must be unique and you may return the result in any order.
                if(!match.includes(num2[index])){
                    match.push(num2[index]);
                }
            }
        }
    }
    console.log(match)
    return match;
}
//Given two integer arrays nums1 and nums2, return an array of their intersection.
console.log(`The intersection array is [${arrIntersect(nums1, nums2)}]`)

/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let numbers = [34, 7, 21, 89, 54, 10, 91, 67];
function maxMinElements(numArr) {
    let max = numArr[0], min = numArr[0];
    let maxInd = 0, minInd = 0;
    //find the maximum amd minimum elements in an array and return their indices
    for (let i = 0; i < numArr.length; i++) {
        //Maximum number and index
        if(numArr[i] > max){
            max = numArr[i];
            maxInd = i;
        }
        //Minimum number and index
        if(numArr[i] < min){
            min = numArr[i];
            minInd = i;
        }
    }
    console.log(`Maximum Element: ${max}, Index: ${maxInd}`)
    console.log(`Minimum Element: ${min}, Index: ${minInd}`)
}
maxMinElements(numbers)


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
function remDuplicates(inArr) {
    let resultArray = [];
    //The order of the elements in the resulting array should be same as the order in the original array.
    for (let index = 0; index < inArr.length; index++) {
        //Given an integer array with duplicate elements as input, return a new array with duplicates elements removed.
        if(!resultArray.includes(inArr[index])){
            resultArray.push(inArr[index])
        }
    }
    return resultArray;
}
console.log(remDuplicates(inputArray))
console.log(`The result array without duplicates: [${remDuplicates(inputArray)}]`);

/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
let nums = [0,0,0,11,0,1,0,3,12]
// let nums = [0]
function moveZeros(numArr) {
    let numsMZeros = [];
    if (numArr.length != 1 || numArr.length != 0){
        //Array without zeros
        for (let index = 0; index < numArr.length; index++) {
            if(numArr[index]!=0){
                numsMZeros.push(numArr[index]);
            }
        }
        //Count of Zeros
        let numZeros = numArr.length - numsMZeros.length;
        //Adding zeros to the end
        for (let index = 0; index < numZeros; index++) {
            numsMZeros.push(0);
        }
    }else{
        numsMZeros = numArr;
    }
    console.log(numsMZeros);
    return numsMZeros;
}
console.log(`The array after moving the zeros to the end: [${moveZeros(nums)}]`);

