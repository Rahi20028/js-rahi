// for-of 

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
    
}

const greeting = "Hello World!"
for(const letters of greeting){
    console.log(letters);
    
}

let map = new Map()
map.set("IN", "india")
map.set("US", "united state of america")
map.set("FR", "france ")

console.log(map);
for(const key of map){
    console.log(key);
    
}

for(const [key,value] of map){
    console.log(`${key} => ${value}`);
    
}




// for of loop with objects (Not iterable)

let myObj = {
    "game1" : "NFS",
    "game2" : "GTA VC",
    "game3" : "GTA SA"
}
// for (const key of myObj) {
//  console.log(key)
// }

// continue in for-of

const letters = ["R", "o", "o", "K"];

for (let ch of letters) {
  if (ch === "o") continue;
  console.log(ch);
}
