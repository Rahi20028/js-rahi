const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed ");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 consumed");
    
})


const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rahi", email : "rahi@example.com"})
    },1000)

})
promisethree.then(function(user){
    console.log(user);
    
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"rahi", email: "abc@.com"})
        }
        else{
            reject('error')
        }
        
    },1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("finally resolved or rejected "))

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('error : js went wrong')
        }
    },1000)
})
async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumepromisefive()