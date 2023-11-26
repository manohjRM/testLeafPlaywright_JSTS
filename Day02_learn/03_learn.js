let uName = "Testing";

function reverseString(name){
    let newString = "";
    // for (let index = name.length; index > 0; index--) {
    //     newString = newString+name.charAt(index-1);
    // }
    let splitname = name.split("");
    for (let index = splitname.length; index > 0; index--) {
        newString += splitname[index-1]
    }
    console.log(newString)
}

reverseString(uName)