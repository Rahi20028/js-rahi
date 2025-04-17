let coding = ["javascript", "python", "php", "cpp", "java", "pearl", "ruby"]
coding.forEach(val => console.log(val))
function print(val) {
    console.log(val);
    
}
coding.forEach(print)


// Using forEach with array of objects

const myCoding = [
    {
        languageName: "javascript",
        fileExtension: "js"
    },
    {
        languageName: "java",
        fileExtension: "java"
    },
    {
        languageName: "python",
        fileExtension: "py"
    },
    {
        languageName: "C++",
        fileExtension: "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName, item.fileExtension);
    
})
