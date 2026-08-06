const score = 400
console.log(score)  // 400 

const balance = new Number(100)
console.log(balance)  //[Number: 100]

console.log(balance.toFixed(2))  // 100.00

const n = 123.8966
console.log(n.toPrecision(4))

const num = 10000000
console.log(num.toLocaleString('en-IN')) // 1,00,00,000

//Number.MAX_SAFE_INTEGER
// Number.MAX_VALUE
// Number.MIN_VALUE


//########################## Math ##################################

console.log(Math)  // run on console to know more about its method

console.log(Math.abs(-4))  // 4
console.log(Math.round(7.4))  // 7 and 7.8 --> 8

console.log(Math.floor(4.8)) // 4
console.log(Math.ceil(4.2))  // 5

console.log(Math.pow(4,2))  // 16
console.log(Math.sqrt(144))  // 12
console.log(Math.min(5,9,3,19))  // 3
console.log(Math.max(5,9,3,19))  // 19

console.log(Math.random()) // random value b/w (0 & 1), zero is included 
console.log(Math.floor(Math.random()*(120-100))+100)  // random value --> 100 t0 120(exclude)

/*
Math.floor(Math.random() * (max - min + 1)) + min; (inclusive of max)

Math.floor(Math.random() * (max - min)) + min;  (exclusive of max)


How it works:
    Math.random() returns a number in the range 0 (inclusive) to 1 (exclusive).
    Multiplying by (max - min) scales the range.
    Adding min shifts it to start at the desired minimum.
    Math.floor() converts it to an integer.
*/