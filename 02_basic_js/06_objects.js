// object constructor : a function that creates obj 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("Alice", 25);
let p2 = new Person("Bob", 30);
console.log(p1.name); 

// object prototype

function animal(name) {
    this.name=name;
}
animal.prototype.speak= function(){
    console.log(`${this.name} makes a noice`);
    
}
let dog=new animal("dog")
dog.speak()


// classes: a mordern way to create an object

class student {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }

introduce(){
    console.log(`hii, i m ${this.name}`);
    
}
}
let s1 = new student("rahi",20)
s1.introduce()


  
