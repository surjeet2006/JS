const name = "Surjeet"
const repoCount = 50

// console.log(name[0])  // S
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// Object type string
const gameName = new String("BGMI")

//console.log(gameName)  // [String: 'BGMI']

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt('2')) 
console.log(name.indexOf('t')) 
console.log(name.substr(0,4))
console.log(name.substring(0,4))
console.log(name.slice(-4,7))

let str = "   hello   "
console.log(str.trim());  //hello==> removes white spaces

let=url = "htttps//:surjeet.com/surjeet%20verma"
url = url.replace('%20','%60')
console.log(url)

console.log(url.includes("verma")) // true

const s = "hello world I am coder"
console.log(s.split(" "))  // [ 'hello', 'world', 'I', 'am', 'coder' ]

/*
| Method                  | Meaning                                                         |
| ----------------------- | --------------------------------------------------------------- |
| `substr(start, length)` | Starts at `start` and takes `length` characters. *(Deprecated)* |
| `substring(start, end)` | Takes characters from `start` up to (but not including) `end`.  |
| `slice(start, end)`     | Similar to `substring()`, but supports negative indexes.        |

*/