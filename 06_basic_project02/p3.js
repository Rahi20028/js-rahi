// Find the First Repeated Character in a String.
//  Create a program that finds and prints the first character that repeats in a given string.


function repeatingchar(str) {
    // let a = "charter"
    // for (let i = 0; i < a.length; i++) {
    //     // let d=a[i]
    //     console.log("a[i]: ", a[i]);

    //     for (let j = i + 1; j < a.length; j++) {
    //         console.log("a[j]: ", a[j]);

    //         if (a[i] == a[j]) {
    //             console.log("first repeating character is :", a[i]);
    //             return
    //         }
    //     }
    // }


    const charactercount={}
    for(let i=0;i<str.length;i++){
        const character=str[i]
        console.log(character);
        console.log(charactercount);
        
        
        if(charactercount[character]){
            
            
            console.log("first repeating char:",character);
            return
        }else{
            charactercount[character] =1
        }
    }
  
}
repeatingchar("character")