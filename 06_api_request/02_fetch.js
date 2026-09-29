// fetch() in JavaScript is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) and work with APIs.
// fetch() returns a Promise, which resolves to a Response object

// Basic GET request
fetch("https://api.github.com/users/surjeet2006").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

// fetch using async await
async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    }
    catch(e){
        console.log("Error:", e)
    }
}
getAllUsers()

/*
console.log("Start");

fetch("/users")
  .then(data => console.log(data));

console.log("End");


The fetch() request can be handled asynchronously by the runtime while JavaScript continues to:

OUTPUT:
    Start
    End
    ...later...
    data

*/
