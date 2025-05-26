let score = "33"
// let score = "33a" // After conversion in Number output will be NaN samee for "sudeep"
// let score = null // After conversion in Number output will be 0
// let score = undefined // After conversion in Number output will be NsN
// let score = true // After conversion in Number output will be 1

// const { store } = req.body

// The problem statement is at line 1 we now score has type number but in line 3 we are unsure about type

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0;


let isLoggedIn = 2

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 or 1+ or (2....) => true; 0 => false
// "" false; 
// "sudeep" true; 

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
