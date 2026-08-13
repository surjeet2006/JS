
const arr = [1, 2, 3]

// const total = arr.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3

const total = arr.reduce((acc, curr) => acc + curr, 0)
console.log(total)  // 6

const shopingCart = [
    {
        item: "Fan",
        price: 2000
    },
    {
        item: "T.V.",
        price: 15000
    },
    {
        item: "Tablet",
        price: 8000
    },
    {
        item: "Bike",
        price: 900000
    }
]

const totalPrice = shopingCart.reduce((acc, item) => acc+item.price, 0)

console.log(totalPrice) // 925000