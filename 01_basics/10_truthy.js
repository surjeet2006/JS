const userEmail = "raaz@skv.com"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}


const arr = []
if(arr.length === 0){
    console.log("Array is empty")
}


const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is emppty")
}

// Nullish Coalescing Operator (??): null undefined

let val;

// val = 5 ?? 10     
// console.log(val) // 5

// val = null ?? 10 
// console.log(val)  // 10

var1 = undefined ?? 15
console.log(var1)  // 15

val = null ?? 10 ?? 20
console.log(val)  // 10


// Ternary Operator
// condition ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

