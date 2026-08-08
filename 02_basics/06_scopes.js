// var a =300;

let b = 500

if(true){
    let b=50
    const c = 40

    //console.log("Inner b: ", b)  // 50

}

//console.log("Outer b", b)  // 500
// console.log(c)  // ReferenceError: c is not defined


// Nested Scope

function one(){
    const useraname = "surjeet"

    function two(){
        const website = "youtube"
        console.log(useraname)
    }
    // console.log(website)  // out of scope

    two()

}

// one()


// +++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}


// addTwo(5)  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

