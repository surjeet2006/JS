const accountId = 144129
let accountEmail = "surjeet123@gmail.com"
var accountPassword = "1234"
accountCity = "Noida"  // you can also use variable without declaration keyword althoug it is not prefered

let accountState;

//accountId = 12 // Not allowed

accountEmail = "verma123@gmail.com"
accountPassword = "9876"
accountCity = "Bengluru"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
| Keyword | Scope                    | Can Reassign? | Can Redeclare?           |
| ------- | ------------------------ | ------------- | ------------------------ | 
|  var    | Function or global scope | ✅ Yes         | ✅ Yes                    |       
|  let    | Block scope              | ✅ Yes         | ❌ No (in the same scope) |
|  const  | Block scope              | ❌ No          | ❌ No                     | 

*/