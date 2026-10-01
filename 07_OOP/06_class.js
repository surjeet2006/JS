// classes introduced in js --> ES6 --> 2015
// Before ES6, JavaScript mainly used constructor functions and prototypes to implement similar behavior.
// Modern JavaScript supports class fields natively. They became part of the JavaScript standard in ES2022.

class Person{ 
    // let name;  // ❌ --> Inside a JavaScript class, you cannot use let or const for class fields.
    name;  // class fields or class properties
    age = 25;
    greet(){
        console.log("Hello Raaz!")
    }
}

const p = new Person();  
p.greet()  // Hello Raaz!
p.name="Raaz"
console.log(p.name)  // Raaz
console.log(p.age)  // 25

// JavaScript automatically provides a default constructor:
// if you need to initialize properties, Then you can define a constructor:

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    getEmail(){
        console.log("Email is :", this.email)
    }
    changeUsername(){
        return this.username.toUpperCase()
    }
}

const user = new User("Raaz", "raaz@abc.com", "1234");
user.getEmail()  // Email is : raaz@abc.com
console.log(user.changeUsername())  // RAAZ


// Behind the scene
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// User.prototype.changeUsername = function(){
//     return this.username.toUpperCase()
// }

// const user = new User("John", "john@abc.com", "40845")
// console.log(user.changeUsername()) // JOHN
