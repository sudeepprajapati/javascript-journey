// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sudeep",
    "full name": "Sudeep Prajapati",
    // mySym: "mykey1", // typeof string
    [mySym]: "mykey2", // typeof Symbol
    age: 18,
    location: "Ujjain",
    email: "sudeep@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday", "Friday"],
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]); // confusion

// Object.freeze(JsUser) // it stops changes in values of an object
JsUser.email = "contact@sudeep.com"
// console.log(JsUser.email);
// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
