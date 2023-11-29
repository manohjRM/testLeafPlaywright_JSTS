let str = "   fly me   to   the moon  "

function lastWordCount(strVal) {
    let words = strVal.split(" ");
    let noSpaceWords = [];
    for (let index = 0; index < words.length; index++) {
        if(words[index]!=''){
            noSpaceWords.push(words[index])
        }
    }
    let lastWord = noSpaceWords[noSpaceWords.length-1];
    return [lastWord, lastWord.length];
}

//Given a string s consisting of words and spaces, return the length of the last word in the string.
let lastWrd = lastWordCount(str);
console.log(`Lenght of the last word "${lastWrd[0]}" is ${lastWrd[1]}`);

//Write a function to check if two strings are anagrams.
function isAnagram(strVal1, strVal2){
    let flag = false
    if(strVal1.length == strVal2.length){
        //splitting the word to characters
        let splitStr1 = strVal1.split('');
        let splitStr2 = strVal2.split('');
        //sorting the characters
        let sortStr1 = splitStr1.sort();
        let sortStr2 = splitStr2.sort();

        // console.log(sortStr1, sortStr2)

        for (let index = 0; index < strVal1.length; index++) {
            if(sortStr1[index] != sortStr2[index]){
                flag = false;
            }else{
                flag = true;
            }
        }

        if(flag === true){
            console.log(`The given words ${strVal1} and ${strVal2} can make an Anagram`);
        }else{
            console.log(`The given words ${strVal1} and ${strVal2} cannot make an Anagram`);
        }
    }
}

isAnagram('listen', 'silent')
isAnagram('hello', 'world')