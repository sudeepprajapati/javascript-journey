const user = {
    username: 'sudeep',
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}


// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node it is a empty object but in browser it is a window object


function milk() {
    let username = "sudeep"
    console.log(this.username); // this won't work here
    console.log(this); // it will print global object
}

// milk()


const cofee = () => {
    let username = "sudeep"
    console.log(this.username); //undefined
    console.log(this); // this won't work here
}

// cofee()

// const addThree = (n1, n2, n3) => {
//     return n1 + n2 + n3
// }
// const addThree = (n1, n2, n3) => n1 + n2 + n3 // implicit return  or
// const addThree = (n1, n2, n3) => ( // implicit return 
//     n1 + n2 + n3
// )

const addThree = (n1, n2, n3) => ({ username: "sudeep" })


console.log(addThree(34, 34, 34));

