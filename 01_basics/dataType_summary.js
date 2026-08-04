// Primitive --> 7 types ==> Number, String, Boolean, null, udefined, Symbol, BigInt

const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1==id2)  // false
console.log(typeof id1)

// Reference (Non-Primitive)  ==> Array, Objects,  Functions

const heros = ["Shaktiman","Peter", "Ironman"] // Array

const obj = {
    name: "Surjeet",
    age: 22
}

const myFunction = function(){  // Function
    console.log("hello world")
}


// JavaScript is a dynamically typed language.
// That means variables do not have a fixed type. The type is determined at runtime, and the same variable can hold different types of values.


// ******************************* Memory ******************************

// Stack --> Primitive  
// Heap --> Non-Primitive  --> reference

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "raaz@gmail.com"

console.log(user1.email)
console.log(user2.email)
