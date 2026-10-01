class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class InstaUser extends User{
    constructor(username, post, like, comment){
        super(username)
        this.post = post
        this.like = like
        this.comment = comment
    }
    getLike(){
        return this.like;
    }
}

const raaz = new InstaUser("Raaz", 23, 150, 55)

console.log(raaz.username)  // Raaz
console.log(raaz.getLike()) // 150

const user = new User("Surjeet")
user.logMe()
// user.getLike()  ❌

console.log(raaz instanceof InstaUser)  // true