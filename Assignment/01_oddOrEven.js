//Create a function named `checkOddOrEven` that takes a number as a parameter 
function checkOddOrEven(n) {
    //Use an `if` statement to check if the number is divisible by 2 
    if((n%2)==0){
        console.log("The given number "+n+" is odd number")
    }else{
        console.log("The given number "+n+" is even number")
    }
}
//Declare and initialize the variable 
let n = 10;
//Call the function and print the result
checkOddOrEven(n)