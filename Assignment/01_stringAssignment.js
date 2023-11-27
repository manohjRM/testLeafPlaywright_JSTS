let s = "   fly me   to   the moon  "

let words = s.split(" ");
let noSpaceWords = [];
for (let index = 0; index < words.length; index++) {
    if(words[index]!=''){
        noSpaceWords.push(words[index])
    }
}
let lastWord = noSpaceWords[noSpaceWords.length-1]
//Given a string s consisting of words and spaces, return the length of the last word in the string.
console.log(`Lenght of the last word is ${lastWord.length}`);

//Write a function to check if two strings are anagrams.
function isAnagram(s1, s2){
    let flag = false
    if(s1.length == s2.length){
        let splitStr1 = s1.split('');
        let splitStr2 = s2.split('');

        let sortStr1 = splitStr1.sort();
        let sortStr2 = splitStr2.sort();

        // console.log(sortStr1, sortStr2)

        for (let index = 0; index < s1.length; index++) {
            if(sortStr1[index] != sortStr2[index]){
                flag = false;
            }else{
                flag = true;
            }
        }

        console.log(flag)
    }
}

// isAnagram('listen', 'silent')
isAnagram('hello', 'world')