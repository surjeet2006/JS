"use strict"; // treat all JS code as newer version 

// alert(3+3)  // Error-> we are using nodejs, not browser 


let name = "surjeet"
let age = 18
let isLoggedIn = false
let state;
/*
Datatypes:
    1. primitive type
        number
        bigint
        string => ""
        boolean => true/false
        null => standalone value
        undefined 
        symbol => unique

    2. Non-primitive type
        object
*/

console.log(typeof "Surjeet")
console.log(typeof age)
console.log(typeof undefined)  // undefined
console.log(typeof null)  // object


/*
Interview point: null is a primitive value, but typeof null returns "object" due to a legacy bug in JavaScript.
The bug has been kept for backward compatibility, because changing it would break existing code.

undefined is a primitive type in JavaScript.
It represents a variable that has been declared but not assigned a value, or the absence of a value.
*/