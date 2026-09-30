let arr = ["John", "Nick"]

let heroPower = {
    thor: 24,
    spiderman: 45,
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.greet = function(){
    console.log("Hello World")
}

heroPower.greet() // Hello world
arr.greet()  // Hello world

// greet property will be inherited by object, array, string

Array.prototype.heyRaaz = function(){
    console.log("Raaz says hello!")
}
arr.heyRaaz() // Raaz says hello!
// heroPower.heyRaaz()  // Error --> b/c heyRaaz is for array only not for object

let myName = "surjeet      ";
console.log(myName.length)
String.prototype.trueLength = function(){
    //console.log(`${this}`) // surjeet      
    console.log(`True length is : ${this.trim().length}`)
}
myName.trueLength() // True length is : 7
"magar   ".trueLength() // True length is : 5
 
// Inheritance
const Student = {
    name: "Ram",
    email: "ram@example.com",
    marks: 90
}

const Teacher = {
    isAvailable: true,
    subject: "JavaScript"
}

const TAsupport = {
    assignment: "JS assignment",
    __proto__: Teacher
}

// Teacher simply has a link to Student
Teacher.__proto__= Student  // Teacher can now look for properties inside Student if it doesn't find them in itself.
console.log(Teacher.marks)  // 90

console.log(TAsupport.subject)  // JavaScript

// Here you've created a prototype chain of three objects.
// TAsupport → Teacher → Student → Object.prototype → null


// Modern Approach
Object.setPrototypeOf(Teacher, Student)


/*
          Object 
         /  |  \
        /   |   \
       /    |    \
 function array  string

*/