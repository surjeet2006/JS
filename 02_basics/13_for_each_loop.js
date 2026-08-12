
const arr = ["js", "ruby", "java", "python", "cpp"]

// arr.forEach( function (val){
//     console.log(val);
// })

// arr.forEach( (item) => {
//     console.log(item);
// })
// callback function --> without function signature --> function () {}


function printMe(item){
    console.log(item);
}
//arr.forEach(printMe)  // just give reference not execute like --> printMe()


// arr.forEach( (item, idx, arr) => {
//     console.log(item, idx, arr)
// })

const myArray = [
    {
        language: "Java",
        extension: "java"
    },
    {
        language: "python",
        extension: "py"
    },
    {
        language: "C++",
        extension: "cpp"
    }
]

myArray.forEach((item) => {
    console.log(item.language)
})
