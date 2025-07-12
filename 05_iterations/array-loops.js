// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    if (greet === " ") break; // 
    // console.log(`each char is ${greet}`);
}


// Maps

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
// map.set('IN', 'INDIA') //Two enteries are not allowed

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(`${key} :- ${value}`);
}

