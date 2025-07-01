// if else

//comparision operators
//  > ;
//  >= ; / greate then equal to
//  < ;
//  <= ; // less then equal to
//  == ; / !== // equallity ignores type
//  === ; / !=== // equallity aslo checks type
//  =; assinable
//  != ; not assined


const isUserLoggedIn = true;
const temperature = 28

// if (isUserLoggedIn) {
//     console.log("Welcome user");
// }

// if (temperature < 37) {
//     console.log("Temperature is Cool");
// } else {
//     console.log("Temperature is Hot");
// }

// console.log("Always");


// const score = 200

// if (score > 100) {
//     let power = 'fly';
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

balance = 1000

// if (balance > 500) console.log("test"); //implicit scope
// if (balance > 500) console.log("test"),
//     console.log('test2'); // posible but not recommonded


// if (balance < 500) {
//     console.log("balance: less then 500");
// } else if (balance < 750) {
//     console.log("balance: less then 750");
// } else if (balance < 900) {
//     console.log("balance: less then 900");
// } else {
//     console.log("balance: less then 1200");
// }

// logical operators &&,||, !

const UserLoggedIn = true;
const debitCard = true;

// if (UserLoggedIn && debitCard && 2 == 3) {
//     console.log("Allow to buy course");
// } else {
//     console.log("Sorry you are not eligible");
// }


const loggedInWithGoogle = false;
const loggedInWithEmail = true;

// if (loggedInWithGoogle || loggedInWithEmail) {
//     console.log("User Logged in");
// }


// Nullish Coalescing operators (??): null undefined

let val1;
// // val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 145

// console.log(val1);

// Terniary operators

// condition ? true : false

const coldCoffePrice = 100

coldCoffePrice >= 80 ? console.log("less then 80") : console.log("more then 80");