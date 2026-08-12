
const arr = [1,2,3,4,5,6,7,8,9,10]

// const newArray = arr.filter((num) => num>5)
const newArray = arr.filter((num) => {
    return num>5
})
console.log(newArray) // [ 6, 7, 8, 9, 10 ]

// Using for each loop
const myArray = []
arr.forEach(num => {
    if(num>5){
        myArray.push(num);
    }
});
console.log(myArray)  // [ 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

let userBooks = books.filter( (book) => book.genre === 'History')

console.log(userBooks)