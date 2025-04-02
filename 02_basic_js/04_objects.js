
let mysym = Symbol()
let user = {
    name:"rahi",
    "surname":"patel",
    age:20,
    [mysym] : Symbol("key1"),
    location:"mehsana",
    email: "rahi123@google.com",
    isloggedin: true,
    lastlogin: ["mon","wed"]
}

console.log(user.email);
console.log(user["email"]);

console.log(user["surname"]);

console.log(user[mysym]);
console.log(typeof mysym);

user.age = 19
console.log(user.age);

// Object.freeze(user)

user.age= 21

console.log(user.age);


user.greeting = function(){
    console.log("hello user");
    
}


user.greeting()

user.greeting2 =function(){
    console.log(`hello user, ${this.name}`);
    
}
user.greeting2()