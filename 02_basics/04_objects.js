// singleton using Constructor

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Same"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sudeep",
            lastname: "Prajapati"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj5 = { obj1, obj2 }
// const obj5 = Object.assign({}, obj1, obj2, obj3) // (target, source) // better appraoch

// const obj5 = { ...obj1, ...obj2, ...obj3 } //best appraoch

// console.log(obj5);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "sa@gmail.com"
    },
]

// console.log(users[0].email);


// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); // print keys 
// console.log(Object.values(tinderUser)); // print values 

// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks defined or undefined and returns truee and false 
