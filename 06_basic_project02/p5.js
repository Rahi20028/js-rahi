function countWords(sentence) {
    let count = 0;
    let length = sentence.length;

    for (let i = 0; i < length; i++) {
        
        if (sentence[i] !== ' ' && (i === 0 || sentence[i - 1] === ' ')) {
            count++;
        }
    }

    return count;
}

console.log("Number of words : ", countWords("this is rahi patel"));

