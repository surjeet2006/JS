// Object
const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby"
}
for (const key in myObj) {
    console.log(myObj[key]) 
}


// Array
const arr = ["John", "Nick", "Ross"]
for (const key in arr) {
    console.log(arr[key])
}

// Map
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

for (const [key, value] in map) {
    console.log(key,' :-', value)  // Prints nothing as map is iterable
}

// for...in → object --> keys/properties
// for...of → iterable (Map, set, array, string) ke values/entries.

/*
## Difference : 

for...in
for (const key in obj) {
    // enumerable property KEYS
}

for...of
for (const value of iterable) {
    // iterable VALUES
}
*/
