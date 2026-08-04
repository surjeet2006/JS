let score = "123abc"

console.log(typeof score)  // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber)  // number
console.log(valueInNumber)  //NaN

console.log( typeof Number(null))  // number
console.log(Number(null))  // 0

console.log(typeof Number(undefined)) //number
console.log(Number(undefined)) // NaN

console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(String(33)) // 33
console.log(typeof String(33)) //string

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) // true

console.log(Boolean(""))  // false
console.log(Boolean("surjeet"))  // true


// *************************Operation************************************

console.log("hello" + " surjeet") // hello Surjeet

console.log("1" + 2)  // 12
console.log(1 + "2")  // 12
console.log("1" + 2 + 2)  // 122 => first operand is string

console.log(1 + 2 + "2")  // 32 



