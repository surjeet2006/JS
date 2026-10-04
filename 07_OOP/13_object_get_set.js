const User = {
    _email: "abc@g.com",
    _password: "1234",

    get email(){
        return this._email
    },
    set email(value){
        this._email = value
    }
}

const user = Object.create(User)
console.log(user.email)