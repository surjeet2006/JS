const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise consumed")
})
// Output
// Async task is complete
// promise consumed


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})
// Output
// Async task 2
// Async 2 resolved


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Verma", emai: "verma@example.com"});
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})
// Output
// { username: 'Verma', emai: 'verma@example.com' }


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "raaz", password: "1234"})
        }
        else{
            reject("ERORR: Something went wrong")
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})


// .then() runs only when the previous Promise is resolved (fulfilled).
// If the Promise is rejected, JavaScript skips the .then() chain and goes to .catch().
// Whatever you return from one .then() becomes the input of the next .then()


/* 
Flow of above program :
Case 1: errror = true 

Promise                                
   ↓
error = true
   ↓
!error → false
   ↓
reject()
   ↓
.then() ❌ SKIP
   ↓
.then() ❌ SKIP
   ↓
.catch() ✅
   ↓
.finally() ✅

OUPUT: 
ERORR: Something went wrong
The promise is either resolved or rejected


Case 2: error = false

Promise
   ↓
error = false
   ↓
!error → true
   ↓
resolve(object) ✅
   ↓
.then() ✅
   ↓
user = { username: "raaz", password: "1234" }
   ↓
return user.username
   ↓
"raaz"
   ↓
.next .then() ✅
   ↓
username = "raaz"
   ↓
.catch() ❌ SKIP
   ↓
.finally() ✅

OUTPUT:
{ username: "raaz", password: "1234" }
raaz
The promise is either resolved or rejected

*/