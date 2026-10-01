// static means the property or method belongs to the class itself, rather than to objects (instances) created from the class.

class User{
    // static field
    // species = "Human"  // belongs to each object
    static species = "Human";  // belongs to class only
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }

    static createId(){
        console.log(`123`)
    }
}

const user = new User("Raaz")
// user.createId()  ❌
User.createId(); // 123✅

console.log(User.species)  // Human
console.log(user.species)  // undefined

