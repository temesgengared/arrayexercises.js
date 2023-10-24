const books = `[{
        "title": "code development",
        "author": "jhonathan",
        "publishedYear": 1951,
        "price": 50
    },
    {
        "title": "the killer",
        "author": "meles",
        "publishedYear": 1960,
        "price": 75
    }

]`
    // parse the json data into an array of book objects
const parsedbooks = JSON.parse(books);
const pricesum = parsedbooks.reduce((sum, book) => sum + book.price, 0)
console.log("price sum", pricesum);
// filter the books published before the year 1960 andcreat a new array with these books 
const bookspuplishedbefor1960 = parsedbooks.filter(book => book.publishedYear < 1960);
console.log("Books published befor 1960");
// console.log(bookspuplishedbefor1960);
// sort the books by their published Year in accending order
const sortedbooks = parsedbooks.sort((a, b) => a.publishedYear < b.publishedYear);
console.log("sorted books", );