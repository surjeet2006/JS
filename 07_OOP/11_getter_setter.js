// class User{
//     constructor(email, password){
//         this.email = email
//         this._password = password
//     }
//     get password(){
//         return this._password
//     }
// }
// const user = new User("abc@g.com", "1234")

// console.log(user.password)  // 1234


class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password = value
    }
}
const user = new User("abc@g.com", "1234")
console.log(user.password)  // 1234
user.password = "abcd"
console.log(user.password) // abcd


