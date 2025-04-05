let a=300
if(true){
    let a=10
    const b=20
    var c=30
    console.log(`inner a :${a}`);
    
}

console.log(c);
console.log(a)
// console.log(b);



function one(){
    const name="rahi"
    function two(){
        const website = "github"
        console.log(name);
        // console.log(website);
    }
    two()
    // console.log(website);
}
one()



if(true){
    const myname="rahi"
    if(myname==="rahi"){
        const website="github"
        // console.log(`${myname} ${website}`);
        
    }
    // console.log(website);
    
 console.log(myname);
}
// console.log(myname);




let x="global"

function outer(){
    let y= "outer"

    function inner() {
        let z ="inner"

        console.log(x);  //global
        console.log(y);  //outer
        console.log(z);  //inner
    }
    inner()
}
outer()




console.log(r); // undefined
var r = 10;

// console.log(p); // ❌ ReferenceError
// let p = 20;
