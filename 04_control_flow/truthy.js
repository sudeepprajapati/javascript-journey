// "" false
// "Anything" truthy
// [] truthy

const userEmail = "s@sudeep.ai"
const usersEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, +0, BigInt 0n, "", null, undefined, Nan.

// truthy values
// "0", "false", " " space, [] , {}, function () {} empty func, any number 2432

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 = true
// false == "" = true