//1. Create a function named `checkNumberType` that takes a number as a parameter.
function checkNumberType(number) {
    //Use `if` to check if the number is greater than 0.
    if (number>0){
        return "The number is positive"
    }
    //Use `else if` to check if the number is less than 0.
    else if(number<0){
        return "The number is negative"
    }
    //Use `else` to handle the case when the number is not greater than 0 or less than 0 
    else{
        return "The number is 0"
    }
}
//Declare and initialize the variable
let number = -5;
//Call the function and print the result
console.log(checkNumberType(number));