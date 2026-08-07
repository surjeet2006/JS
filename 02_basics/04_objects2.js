// const regUser = new Object()

const regUser = {}
regUser.name = "Raaz"
regUser.age = 19 
regUser.address = "Gkp"

//console.log(regUser)  // { name: 'Raaz', age: 19, address: 'Gkp' }

console.log(Object.keys(regUser))  // # v.imp ==>  give array of keys --> [ 'name', 'age', 'address' ]  
console.log(Object.values(regUser))  // give array of values --> [ 'Raaz', 19, 'Gkp' ]
console.log(Object.entries(regUser))  //give array of array of key-value pair => [ [ 'name', 'Raaz' ], [ 'age', 19 ], [ 'address', 'Gkp' ] ]

console.log(regUser.hasOwnProperty('address')) // true


const user = {
    email: "user@google.com",
    name: {
        firstName: "Surjeet",
        lastName: "Verma"
    }
}

// console.log(user.name) // { firstName: 'Surjeet', lastName: 'Verma' }
// console.log(user.name.firstName)  // Surjeet

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "p", 4: "q"}
const obj3 = {5: "r", 6: "s"}

const obj4 = {...obj1, ...obj2, ...obj3} // merge objects 
//console.log(obj4)

// Object.assign(obj1, obj2, obj3) // merge in obj
// console.log(obj1)

const obj5 = Object.assign({}, obj1, obj2, obj3) // merge in an empty object{}, and make it obj5


// objects destructuring

const course = {
    courseName: "JavaScript",
    price: 1999,
    mentor: "Surjeet"
}

// course.mentor

const {mentor} = course
console.log(mentor)  // Surjeet 

 
// Database values ==> arrray of objects

const users = [
    {
        id: 1,
        emai: "x@gmail.com"
    },
    {},
    {},
    {}
] 

users[1].emai // to access value 

// JSON API format
// key --> string , value --> string

// {
//     "name": "raaz",
//     "course": "JavaScript",
//     "price": "2999"
// }


[
    {},
    {},
    {}
]