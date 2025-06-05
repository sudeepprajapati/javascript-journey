const score = 400

const balance = new Number(100.203232)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 1123.4999

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // absolute converts nagative to positive and positive remains positive

// console.log(Math.round(4.5)); // provides routnd of value by removing decimal values 
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.6)); //explain

// console.log(Math.min(4, 3, 8, 1));
// console.log(Math.max(4, 3, 8, 1));

// console.log(Math.random()); // Random values between 1 and 2
// console.log(Math.random() * 10); // Random whole Number ex. 3.435435

// console.log(Math.random() * 10 + 1); // Random Natural Number //but this should be avoided
// console.log((Math.random() * 10) + 1); // Random Natural Number // Better approach
console.log((Math.floor(Math.random() * 10)) + 1); // Random Natural Number // Best approach removing decimal vlaues

const min = 10
const max = 20

const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomValue);

