function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

// sayMyName()

// function addTwoNumbers(number1, number2) // (params)
// {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;
//     return result
//     // console.log("sudeep"); //function don't work after return statement
// }

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// const result = addTwoNumbers(2, 5)

// console.log("Result", result);



function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sudeep"));
// console.log(loginUserMessage()); // undefined


// case study

// function calculateCartPrice(...num1) { //case one
//     return num1
// }


// function calculateCartPrice(val1, val2, ...num1) { //case two
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "sudeep",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// handleObject({
//     username: "sam",
//     price: 390,
// })


const myNewArray = [200, 400, 340, 4332]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
