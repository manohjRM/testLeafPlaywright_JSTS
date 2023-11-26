function printSum(num) {
    let sum = 0;
    for (let index = 0; index <= num; index++) {
        sum = sum + index;
    }
    return sum;
}

let number = 5;
console.log(printSum(number))