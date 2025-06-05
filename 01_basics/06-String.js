const userName = "sudeep"
const repoCount = 10

// console.log(userName, repoCount + ":Repos "); // outdated

// console.log(`Hello my name is ${userName.toUpperCase()} and my repo count is ${repoCount}`) // string interpolation

const str1 = "sudeep";           // Primitive string
const str2 = new String("sudeep"); // String object created with the new keyword.

const gameName = new String('sudeep-p')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // see output at browser console


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));


const newString = gameName.substring(0, 4) // this ignores nagative values and starts with zero

// console.log(newString);

const anotherString = gameName.slice(-7, 4) // same as above method and it accepts nagative value 

// console.log(anotherString);

const newStringOne = "    sudeep   " // removes extra space
// console.log(newStringOne);
// console.log(newStringOne.trim()); // variants: startswith and endswith


const url = 'https://sudeep.com/sudeep%20prajapati'

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sudeep'))

console.log(gameName.split('-'));
