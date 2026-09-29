const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1234"})
        }
        else{
            reject("ERORR: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseOne(){
    try {
        const response = await promiseOne
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }   
}
consumePromiseOne()  // ERORR: Something went wrong


/*
await means:

"Wait for promiseOne to settle. If it resolves, give me its resolved value. If it rejects, throw the rejection as an error."

1. Promise is resolved → no try...catch needed
2. Promise is rejected → without try...catch, error is thrown
3. await receives the rejected Promise and throws the rejection.

Points to remember:
    1. async → function returns a Promise
    2. await → wait for a Promise's result
    3. resolve() → await gets the value
    4. reject() → await throws an error
*/