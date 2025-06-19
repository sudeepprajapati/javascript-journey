// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "SudeepPrajapati"

let anothername = myYoutubeName
anothername = 'sudeep.mint'
// console.log(myYoutubeName);

// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sudeep@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// -----------------------------
// Stack vs Heap Memory in JavaScript
// -----------------------------

// 🧠 Stack (Primitive Types):
// - Used for storing primitive data types: string, number, boolean, null, undefined, symbol, bigint
// - When you assign one primitive to another, a **copy** of the value is made-----
// - Changes to one variable do NOT affect the other
// - Stores the actual value
// - Fast access and auto-managed

// 🧱 Heap (Non-Primitive Types):
// - Used for storing non-primitive data types: objects, arrays, functions
// - Stores a reference (pointer) to the actual value in memory
// - When you assign one object to another, they both point to the **same reference**
// - Changes through one reference affect the original object

// 🔁 Summary:
// Primitive types = copied by value (Stack)
// Non-primitive types = copied by reference (Heap)
