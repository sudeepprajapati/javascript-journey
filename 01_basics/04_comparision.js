// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("02" > 1);
{
    // console.log(null > 0); //JavaScript converts null to a number, which becomes 0. So it’s like: 0 > 0 → which is false

    // console.log(null == 0); //JavaScript does NOT convert null to a number when using == So it checks: “Is null equal to 0?” → No, they’re different types.

    // console.log(null >= 0); // true

    // console.log(undefined == 0);
    // console.log(undefined > 0);
    // console.log(undefined >= 0);
    // console.log(undefined <= 0);
    // avoid such comprasions
}
// ===

console.log("2" === 2);

// 🤯 Why this feels confusing:
// JavaScript tries to guess what you mean and automatically changes types.This is called type coercion, and it can lead to confusing results.