//Create a function named `checkOddOrEven` that takes a number as a parameter 
function checkOddOrEven(nums) {
    //Use an `if` statement to check if the number is divisible by 2 
    if(!(nums%2)==0){
        console.log("The given number "+nums+" is odd number")
    }else{
        console.log("The given number "+nums+" is even number")
    }
}
//Declare and initialize the variable 
let nums = 1219;
//Call the function and print the result
checkOddOrEven(nums)