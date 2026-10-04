function User(email, password){
    this.email = email
    this.password = password

    Object.defineProperty(this, "email",{
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password",{
        get: function(){
            return this._password
        },
        set: function(value){
            this._password = value
        }
    })
}

const user = new User("xyz@ab.com", "pqrt")

console.log(user.email)  // xyz@ab.com
console.log(user.password)  // xyz@ab.com
