// classes

class Person{
    constructor(name,age){
        this.name=name
        this.age=age

    }
    greet(){
        console.log(`hii, my name is ${this.name} and i m ${this.age} years old`);
        
    }
}

const person1 = new Person("rahi", 20)
person1.greet()


// inheritance
class Student extends Person{
    constructor(name, age, course){
        super(name,age)
        this.course=course
    }
    study(){
        console.log(`${this.name} is studying ${this.course}`);
        
    }


}

const s1 = new Student("rahi", 20, "javascript")
s1.greet()
s1.study()

// excapsulation

class Bankaccount{
    #balance = 0
    deposit(amount){
        this.#balance += amount
        console.log(`deposited : rs ${amount}`);
        
    }
    getBalance(){
        return this.#balance
    }
}
const acc = new Bankaccount()
acc.deposit(1000)
console.log(acc.getBalance());


// polymorphism ------ method overriding

class Animal{
    speak(){
        console.log("animal makes a sound");
        
    }
}
class Dog extends Animal{
    speak(){
        console.log("dog barks");
        
    }
}

const d = new Dog()
d.speak()

// abstraction

class Calculator{
    add(a,b){
        return this.#internalAdd(a,b);
    }
    #internalAdd(x,y){
        return x + y
    }
}
const calc = new Calculator()
console.log(calc.add(2,3));




// Concept	     --JavaScript Example
// Class	     --class Person {}
// Constructor   --constructor() initializes values
// Method        --	greet() inside class
// Object        --	const obj = new Class()
// Inheritance   --	class Child extends Parent
// Encapsulation --	Private fields: #field
// Abstraction   --	Hide internal logic via methods
// Polymorphism  --	Method overriding 