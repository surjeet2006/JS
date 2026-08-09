// Immediately Invoked Function Expressions (IIFE) --> ()(); => one for wrapping fuction and other for its execution

// Usecase :
// To create a private scope
// To avoid global variable pollution 

(function raj(){
    // named IIFE
    console.log("DB CONNECTED")
}) ();  // here semicolon is required to end the code 

// In arrow function
( () => {
    console.log("This is arrow function")
}) ();

( (name) => {
    console.log(`DB CONNECTED by ${name}`)
})("Surjeet");

//Modern JavaScript has ES modules, let/const, and block scope, so IIFEs are less common.


