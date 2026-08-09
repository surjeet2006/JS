
// this keyword is used to access the variables of current context

const user = {
    username: "surjeet",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "raaz"
// user.welcomeMessage()

//console.log(this)  // {}

// Normal Function
function raaz(){
    let usesrname = "surjeet"
    console.log(this.username)  // undefined 
}
// raaz()

// let username creates a variable.
// this.username accesses an object property.
// If you want this.username to work, username must be a property of the object that this refers to.


// Arrow Function
const raj  = () => {
    let usesrname = "surjeet"
    console.log(this.username)  // undefined
}
//raj()

// Arrow functions do not create their own this. They inherit this from the surrounding scope.

// username → local variable
// this.username → property of the object that this refers to.


// const addTwo = (x, y) => {
//     return x + y
// }

//const addTwo=(x, y) => x + y   // implicit return

// const addTwo=(x, y) => (x + y)  // no need to write return if curly bracket is not used.

const addTwo = (x, y) => ({email: "Surjeet@skv.com"})   // return object 

console.log(addTwo(4, 5))


