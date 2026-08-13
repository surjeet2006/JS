
const arr = [1,2,3,4,5,6,7,8,9,10]

const newArray = arr.map((num) => num*2)
console.log(newArray)

// Chainig of methods 
const myArray = arr
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num>=40)

console.log(myArray)  // [ 41, 51,  61, 71, 81, 91, 101 ]
  
