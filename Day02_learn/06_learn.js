const numbers = [2,4,7,8,11,14];
const target = 18;
let count = numbers.length;
function getSumIndices(nums, t, count) {
    // for (let i = 0; i <= nums.length; i++) {
    //     for (let j = 0; j <= nums.length; j++) {
    //         let sum = nums[i]+nums[j]
    //         if(sum==t){
    //             console.log(`The indices of the sum are ${i}, ${j}`)
    //         }
    //     }
    // }
    let sum = 0;
    let indices = [];
    for (let i = 0; i < count; i++) {
        if(i!=count){
            sum = nums[i]+nums[count]
            if (sum == target){
                indices.push(i);
                indices.push(count);
                console.log(`The indices of the sum are [${indices}]`);
            }
        }
    }
    if(!count==0){
        count--;
        getSumIndices(nums, t, count);
    }
}

getSumIndices(numbers, target, count)