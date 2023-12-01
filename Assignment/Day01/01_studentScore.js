//Create a function named `calculateGrade` that takes a student's score as a parameter.
function calculateGrade(score){
   //Use `switch` statement inside the function
   //Use a `switch` statement with the condition `true`.
    switch (true) {
      //Use `case` statements to check different score ranges and return the corresponding grade.
       case score<=100 && score>=90:
          console.log("The grade is S");
          break;
       case score<90 && score>=75:
          console.log("The grade is A");
          break;
       case score<75 && score>=60:
          console.log("The grade is B");
          break;
       case score<60 && score>=35:
          console.log("The grade is C");
          break;
       default:
          console.log("F");
          break;
    }
 }
//Declare and initialize the variable
let score = 68;
//Call the function and print the result
calculateGrade(score);