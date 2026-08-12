// Array
const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val)
}

// String 
const greet = "Hello Surjeet"
for (const ch of greet) {
    console.log(ch)
}

// Map --> key, value pair 
// Duplicates are not allowed
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') 

console.log(map)

for (const [key, value] of map) {
    console.log(key,' :-', value)
}

console.log(map.get('IN'));  // India
console.log(map.has('IN')); // true


// Object 
const myObj = {
    game: "BGNI",
    game2: "Ironman"
}
// for (const [key, value] of myObj) {
//     console.log(key,' :-', value)  // TypeError: myObj is not iterable
// }

