console.log(Math.PI)  // 3.141592653589793
Math.PI = 5
console.log(Math.PI)  // 3.141592653589793  --> the value did not change 

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false  // cannot be redefined or deleted 
}

Note:  
    Math.PI is a built-in JavaScript property, since configurable: false, you cannot redefine Math.PI to make it writable or change its value using Object.defineProperty()
*/

const course = {
    name: "JS",
    price: 2990,
    isAvailable: true,
    orderCourse : function(){
        console.log("Course purchased successfully");
    }
}
console.log(Object.getOwnPropertyDescriptor(course, "price"))
// { value: 2990, writable: true, enumerable: true, configurable: true }

Object.defineProperty(course, "price", {
    writable: false,  // price can not be overwrite
    enumerable: false  //means price can't be enumerated over loops 
})

console.log(Object.getOwnPropertyDescriptor(course, "price"))
// { value: 2990, writable: false, enumerable: false, configurable: true }

for(let [key, value] of Object.entries(course)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}
/*
name : JS
isAvailable : true
*/

