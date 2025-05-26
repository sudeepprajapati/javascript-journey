const accoundId = 144432324
let accountEmail = "sudeep@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accoundState;

// accoundId = 2 not allowed

accountEmail = "hc@c.com"
accountPassword = "hc@23"
accountCity = "Ujjain"

console.log(accountEmail);

/* Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accountEmail, accountPassword, accountCity, accoundState])

{
    // this is a local scope
    var hello = "hello"  // var a global scope
    let hello = "hello" // let has dyanmic scope
}

// this is a globall scope
console.log(hello);
