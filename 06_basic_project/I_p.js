// Count the Number of Vowels and Consonants in a String

function vowelsandConsonants(string){
    let Vowels= ["a","e","i","o","u"]
    let vowelcount = 0
    let Consonantcount = 0

    for(let char of string){
        if (Vowels.includes(char)) {
            vowelcount ++
          
        }
        else{
            Consonantcount++
           
        }
        
    }
    console.log("vowelscount:" , vowelcount);
        console.log("consonantcount:" , Consonantcount);

}
console.log(vowelsandConsonants("rahi"));

