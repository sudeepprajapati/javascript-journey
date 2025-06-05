// # Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// A Symbol is a special data type in JavaScript used to create unique values — even if they look the same.

const pet1 = Symbol('Fluffy');
const pet2 = Symbol('Fluffy');

// console.log(pet1 === pet2); // false — they’re different pets!

// Symbol() always creates a new, unique value

// 🧠 Why use BigInt ?
// JavaScript normally uses a type called Number, which can only safely go up to: 
// 9007199254740991  // (That's 2^53 - 1) or 16 digits.

const bigNumber = 90071992547409912n;

// console.log(typeof bigNumber);

// #Refrence (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "hanuman", "mm"];
// console.log(typeof heros); // "object"
// console.log(Array.isArray(heros)); // checks if heros is an array
// Think of arrays like a special kind of backpack (object) that’s designed to hold items in order (like a list), while regular objects are like storage boxes with named compartments.

let myobj = {
    name: "sudeep",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world!");
}


// console.log(typeof myFunction);
