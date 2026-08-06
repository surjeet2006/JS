// #Date

let date = new Date()
// console.log(date.toString())  // Thu Aug 06 2026 06:47:48 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString())  //Thu Aug 06 2026
// console.log(date.toISOString())   // 2026-08-06T06:50:40.684Z
// console.log(date.toLocaleString())  // 8/6/2026, 6:50:40 AM
// console.log(date.toLocaleDateString())  // 8/6/2026
// console.log(date.toJSON())  // 2026-08-06T06:54:03.673Z

console.log(typeof date)  // object

let myDate = new Date("2023-01-30")
//let myDate = new Date("01/30/2023")
//let myDate = new Date("Jan 30 2023")
//let myDate = new Date(2023, 0, 30)
//let myDate = new Date(2023, 0, 30, 5, 3) //date & time
//console.log(myDate.toDateString())  // Mon Jan 30 2023


// #Time
let timeStamp = Date.now()
console.log(timeStamp)  //time in milisecond from 1970
console.log(myDate.getTime())



