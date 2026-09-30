// objects 
const user = {
    username: "surjeet",
    loginCount: 8,
    signedIN: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Usrname: ${this.username}`)  // this keyword is used to define cuurent context
        //console.log(this)
    }
}
// console.log(user.username)  // surjeet
// user.getUserDetails()
// console.log(this)  // {} --> empty object

// constructor function
function User(username, logiCount, isLoggedIn){
    this.username = username
    this.logiCount = logiCount
    this.isLoggedIn = isLoggedIn

    return this  // it returns the current object
    // return this is not required while using new keyword as new automatically returns the newly created object.
}

const userOne = User("John", 12, true)
const userTwo = User("Nick", 16, false)  // Here, JavaScript doesn't create a new object for you.

// console.log(userOne)  // userOne has been overwitten by userTwo --> this create the need of 'new' keyword


// new keyword
function Raaz(username, logiCount, isLoggedIn){
    this.username = username
    this.logiCount = logiCount
    this.isLoggedIn = isLoggedIn
}

const user1 = new User("John", 12, true)
const user2 = new User("Nick", 16, false)

console.log(user1)
console.log(user2)