let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Day Month Date Year
// console.log(myDate.toLocaleDateString()); // Date/Month/Year
// console.log(myDate.toLocaleString()); // Date/Month/Year, 12hour:minute:seconds am/pm

// console.log(myDate.toLocaleTimeString()); // 12hour:minute:seconds am/pm

// console.log(myDate.toTimeString()); // 24hour:minute:seconds am/pm GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); //Day, 12hour:minute:seconds 11:10:57 GMT

// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2025, 0, 23) // toString
// let myCreatedDate = new Date(2025, 0, 23, 5, 4) // toLocaleString includes manual times
let myCreatedDate = new Date('05-14-2025') //toLocaleString mm-dd-yyyy

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1748604622833
// console.log(myCreatedDate.getTime()); 

// console.log(Math.floor(Date.now() / 1000)); // interview

let newDate = new Date()

console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})