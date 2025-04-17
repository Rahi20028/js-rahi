// for in loops 

const myobj={
    js: "javascript",
    py: "python",
    cpp: "C++",
    rb: "Ruby",
}
for (const key in myobj){
    console.log(key);
    console.log(key, ":", myobj[key]);
    
}



const lang = ["javascript", "Ruby", "Pearl",
    "java", "C++"]

    for(const key in lang){
        console.log(key);
        
    }

    
// for in loop with Map (Not iterable for for in loop)

let map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
console.log(map)
for (const key in map) {
    console.log(map.key)
}