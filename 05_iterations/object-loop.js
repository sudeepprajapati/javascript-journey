const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by google",
}

for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //it will print index
    // console.log(programming[key])
}

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// for (const key in map) {
//     console.log(key);
// }
