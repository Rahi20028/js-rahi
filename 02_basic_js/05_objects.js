 const user = new Object();

 user.id= "123abc"
 user.name = "rahii"
 user.isloggedin= false
 console.log(user);
 
 const customer ={
    email: "rahi856@google.com",
    fullname: {
        userfullname:{
            firstname:"rahi",
            lastname:"patel"
        }
    }
 }
 
 console.log(customer.fullname)
 console.log(customer.fullname.userfullname)
 console.log(customer.fullname.userfullname.lastname);
 
 
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj3={5:"a",6:"b"}

//  will create nested obj
 const obj4={obj1,obj2,obj3}   
 console.log(obj4);

//  give expected outcome
 const obj5= Object.assign({}, obj1,obj2,obj3)
 console.log(obj5);

//  spread operator
 const obj6 = {...obj1,...obj2,...obj3}
 console.log(obj6);
 

 const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
]
 
 
console.log(users[1].email);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("loggedin"));



const course= {
    coursename:"js",
    price:200,
    courseinstructor:"rahii"
}

const {courseinstructor:instructor}=course
console.log(instructor);


// json 
// {
//       coursename:"js",
//     price:200,
//     courseinstructor:"rahii"
// }