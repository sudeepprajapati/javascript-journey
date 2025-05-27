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
// console.log(stringNumber);
// console.log(typeof stringNumber);


/* ********************** Operations ******************************************** */

let value = 3
let nagValue = -value
// console.log(nagValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); //power
// console.log(2 / 2);
// console.log(2 % 2); // reminder // usecase in crypto currency and other algos

let str1 = "hello"
let str2 = 'sudeep'

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log((1 + "2"));
// console.log("1" + 2 + 3); // "12" + 3 = 123
// console.log(1 + 2 + "3"); // 3 + "3" = 33

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
// ++gameCounter;
console.log(gameCounter);

// prefix and postfix js 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);

// Expected output: "a:4, b:4"

// Postfix increment
// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n

// Prefix increment
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n
