// for

// for (let i = 0; i <= 10; i++) {
//     console.log(`The value of i is ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//     const square = i * i;
//     console.log(`The square of ${i} is ${square}`);
// }

// console.log(square); // This will throw an error because square is not defined outside the loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best numbver");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop: The value of i is ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop: The value of j is ${j} and i is ${i}`);
//         console.log((i + "*" + j + " = " + (i * j)));
//     }
// }

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break; // Skip the rest of the loop when i is 5
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("SKip 5");
//         continue; // Skip the rest of the loop when i is 5
//     }
//     console.log(i);
// }