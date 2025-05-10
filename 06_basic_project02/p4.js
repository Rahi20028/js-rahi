// Count How Many Times Each Word Appears in a Sentence.
//  Write a logic that counts the frequency of each word in a sentence, without using built-in map functions.

let sentence = "a student beats a student2 after student2 beats student"
let words = sentence.split(" ")
let wordcount = {}

for (let i = 0; i < words.length; i++) {
    let word = words[i]


    if (wordcount[word]) {
        wordcount[word] += 1

    }
    else {
        wordcount[word] = 1
    }
}
console.log(wordcount);
