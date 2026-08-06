const arr = ["Thor", "Ironman", "Spiderman"]
const brr = ["Superman", "Flash", "Batman"]

// arr.push(brr)

// console.log(arr) // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(arr[3][1]) // Flash

// concat() does not modify the original arrays; instead, it returns a new array.
//console.log(arr.concat(brr))  // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// spread operator(...)
const crr = [...arr, ...brr]
//console.log(crr)  // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// const drr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]
// const err = drr.flat(2) // hover cursor on flat to know about it
// console.log(err)

console.log(Array.isArray("Surjeet"))  //false
console.log(Array.from("Surjeet"))  // return an array
console.log(Array.from({name: "Surjeet"}))  // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  //[100, 200, 300]

/*
The spread operator (...) is a JavaScript syntax that expands an iterable (such as an array, string, or object) into individual elements or properties.

1. Copy an array
    const arr = [1, 2, 3];
    const copy = [...arr];
    console.log(copy); // [1, 2, 3]

2. Merge arrays

3. Add elements while copying
    const arr = [2, 3];
    const newArr = [1, ...arr, 4];
    console.log(newArr); // [1, 2, 3, 4]

4. Copy an object
    const user = {
    name: "Alice",
    age: 25
    };
    const copy = { ...user };
    console.log(copy);

5. Merge objects

6. Strings
    const str = "Hello";
    const chars = [...str];
    console.log(chars); // ["H", "e", "l", "l", "o"]
*/