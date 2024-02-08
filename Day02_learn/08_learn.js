
function reverseFunction(num, reversed = 0) {
    if (num === 0) {
        return reversed;
    }
    return reverseFunction(Math.floor(num / 10),
        reversed * 10 + num % 10);
}
 
const num = 123456;
const result = reverseFunction(num);
 
console.log(result);

let final = 0;
let n1 = 212;

while(n1!=0){
    
    final = final * 10 + n1%10; 
    n1 = Math.floor(n1/10);
}
console.log(final);