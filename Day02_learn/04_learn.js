let uName = "mom";

function isPalindrome(name){
    let newString = "";
    // for (let index = name.length; index > 0; index--) {
    //     newString = newString+name.charAt(index-1);
    // }
    let splitname = name.split("");
    for (let index = splitname.length; index > 0; index--) {
        newString += splitname[index-1]
    }
    if(name===newString){
        console.log(`Given string '${name}' is a palindrome '${newString}'`)
    }else{
        console.log("Not a palindrome")
    }
}

isPalindrome(uName)