const myNums = [1, 2, 3]

const initialValue = 2

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 1999,
    },
    {
        itemName: "fullstack course",
        price: 5999,
    },
    {
        itemName: "Data Science course",
        price: 9999,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
