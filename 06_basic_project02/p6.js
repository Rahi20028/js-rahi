//  Find the Longest Word in a String. 
// Scan a sentence and return the longest word without using .split() or .sort().

const sentence= "this is a giraffeeee writingg a code "
let currentWord=""
let longestWord=""
for(let i=0; i<sentence.length;i++){
    let char= sentence[i]

    if(char != " "&& char!= undefined){
        currentWord+= char
    }
    else{
        if(currentWord.length> longestWord.length){
            longestWord = currentWord
        }
        currentWord=""
    }
    
}
console.log("longest word is : ", longestWord);
