console.log(2 > 1)  // true
console.log(2===2)  // true
console.log("02" === 2);  // false  (strict equality checks type)

console.log("2" > 1)  // true
console.log("02" > 1)  //true

// JavaScript automatically converts the string to a number when comparing a string with a number using relational operators (>, <, >=, <=).


console.log("2" > "10");   // true

//If both operands are strings, JavaScript performs lexicographical (dictionary) comparison, not numeric comparison.

console.log(null > 0)  // false
console.log(null == 0)  // false
console.log(null >= 0)  // true

// The reason is that an equality check == and comparisons <,>,>= work diiferently.
// Comparison convert null to a number, treating it as 0, that's why null>=0 is true and null>0 is false

console.log(undefined == 0)  // flase 
console.log(undefined > 0)  // false
console.log(undefined < 0)  // false


/*
Rule of thumb:
    String vs Number → string is converted to a number.
    String vs String → lexicographical (Unicode) comparison.
    Number vs Number → numeric comparison.
*/