function User(username, email, password){
    // setUsername(username)  // 1. called, 2. User { email: 'raaz@example.com', password: '12345' }
    setUsername.call(this, username)  // 1. called,  2. User { username: 'Raaz', email: 'raaz@example.com', password: '12345' }
    // "Call setUsername, and make its this the same this I'm currently using."
    this.email=email
    this.password=password
}

function setUsername(username){
    this.username=username
    console.log("called");
}

const user1 = new User("Raaz", "raaz@example.com", "12345")
console.log(user1)