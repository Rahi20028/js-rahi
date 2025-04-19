// armstrong number check

let num = 153
const originalNum = num
let StringNum = num.toString()
let sum = 0
while(num>0){
    sum = sum + ((num%10)**StringNum.length)
    num= Math.floor(num/10)
  

}
console.log(sum);

if(originalNum==sum){
    console.log(" thee number is armstrong");
    
}else{
    console.log("the number is not armstrong");
    
}