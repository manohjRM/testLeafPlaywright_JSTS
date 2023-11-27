const nums = [1,1,2,5,6,1,3,2,9,6]

function findDuplicate(num) {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        if(num==nums[index]){
            sum++;
        }
    }
    return sum;
}

let num = 1
console.log(`The number of occurance of ${num} is ${findOccurnace(num)}`)