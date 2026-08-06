// singleton
//Object.create


// object literals

const sym = Symbol("Key1")  // imp* for interview point

const jsUser = {
    name: "Surjeet",
    "last name": "Verma",
    [sym]: "mykey1",
    age: 19,
    location: "Gkp",
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(jsUser.email)
// // console.log(jsUser.last name)  // Not allowed
// console.log(jsUser["last name"])
// console.log(jsUser["location"])
// console.log(jsUser[sym])


// jsUser.email = "raaz@gmail.com"  // overwrite
// Object.freeze(jsUser) // freeze the object --> no change can be done 
// jsUser.email = "surjeet@gmail.com" // no change
//console.log(jsUser)

// adding function to object
jsUser.greet = function(){
    console.log("Hello JS user")
}

jsUser.greetTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(jsUser.greet())
console.log(jsUser.greetTwo())