// js array are resizable
// may contain mix of data  types
// zero based index
// js array-copy operation create shallow copy (share the same reference)

const arr = [0,1,2,3,4,5]
const arr2 = ["Jack", "Nick", 1, 2.5, 3, [7,8,9]]

const arr3 = new Array(1,2,3,4,5)

// Array Metthods

arr.push(7)
arr.push(8)
arr.pop()

arr.unshift(9) // Insert element at starting index
arr.shift()  // pop element from starting index

console.log(arr.includes(10)) // boolean
console.log(arr.indexOf(10))  // return idx , if not present return -1

const newArr = arr.join('-')  // combines all the elements of an array into a single string
console.log(newArr) // 0-1-2-3-4-5
console.log(typeof newArr) // string


// slice vs splice
const myn1 = arr.slice(1,3)
console.log("A: ",arr)  // A:  [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1)  // [ 1, 2 ]
console.log("B: ",arr)  // B:  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = arr.splice(1,3) // arguement --> start, deleteCount
console.log("C: ",arr)  // C:  [ 0, 4, 5 ]
console.log(myn2)  // [ 1, 2, 3 ]

//Insert elements
const arr = [1, 2, 5];
arr.splice(2, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]


//Replace elements
const arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4]


/*
Use slice() when you:
    Need a copy of part of an array
    Don't want to modify the original array
    Want to clone an array


Use splice() when you:
    Need to remove elements
    Need to insert new elements
    Need to replace elements
    Intentionally want to modify the original array
*/

