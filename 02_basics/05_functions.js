
function greet(){
    console.log("Good Morning, Raaz!")
}
//greet()

function add(x, y){
    console.log("Sum is: ", x + y)
}
add(5,8)


function multiply(a, b){
    return a * b
}
const res = multiply(5, 8)
console.log("Multiplication: ", res)


function loginUserMessage(username = "hero"){ // default parameter --> used if no argument is passed
    if(username === undefined){  // defining logic 
        console.log("Please enter a useraname")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Raaz"))


// rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600))  // [200, 400, 600]


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600, 2000))  // [600, 2000]


const user = {
    username: "raj",
    price: 199
}

function handleObject(user){
    console.log(`Username is ${user.username} and price is ${user.price}`)
}
//handleObject(user)

handleObject({
    username: "surjeet",
    price: 1999
})


const myArray = [100, 200, 300, 500]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myArray))  // 200