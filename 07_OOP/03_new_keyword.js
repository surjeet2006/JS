// Functions are objects too
// In JavaScript, a function is not only something you can call.
// A function is also an object, so you can attach properties to it.

function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
multiplyby5.description = "Multiplies a number by 5";
multiplyby5.author = "John";

// console.log(multiplyby5(5))  // 25  ==> callable behavior
// console.log(multiplyby5.power)  // 2 ==> object behavior
// console.log(multiplyby5.description);  // Multiplies a number by 5
// console.log(multiplyby5.author);  // John
// console.log(multiplyby5.prototype);  // {}


function User(username, score){
    this.username=username
    this.score=score
}
// console.log(User.prototype) // {}
// A prototype is an object from which another object can inherit/access properties and methods.

User.prototype.increament = function(){
    this.score++;  // "Increase the score of the object that is currently calling me."
}

// this makes the method operate on whichever User object called it.
// Without this, you wouldn't know which user's score is to be increased.
// In short: same function, different caller → different this.

User.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

console.log(User.prototype)  // { increament: [Function (anonymous)], printMe: [Function (anonymous)] }

const u1 = new User("Raaz", 25)
const u2 = User("Taaz", 45)

u1.printMe() // score is 25
u1.increament()
u1.printMe() // score is 26

// u2.printMe()  --> will give an error => b/c new keyword has not been used while creating object which means:
// User() is just a normal function call. JavaScript does not create a new User object.

/*
Here's what happens behind the scene when the new keyword is used: 
1. Create a new empty object
2. Set that object's prototype to User.prototype
3. Call User() with this = the new object
4. Return that object
*/