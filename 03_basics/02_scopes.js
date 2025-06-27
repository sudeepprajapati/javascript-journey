// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 40
    // console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(params) {
    const username = 'sudeep'
    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}

// one()

if (true) {
    const username = 'sudeep'
    if (username === "sudeep") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ intresting ++++++++++++++++++++++++++++

console.log(addone(5));  // possible
function addone(num) {
    return num + 1
}




// console.log(addTwo(5)); // not possible
const addTwo = function (num) {
    return num + 2
}


