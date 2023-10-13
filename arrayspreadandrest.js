// what to do ?spread opretor & rest opretor
// how to do ?the elementof array into a new array, by combine arrays
//spread opretor for array creation 
let Fruits1 = ['apple', 'kiwi', 'orange']
let Fruits2 = ['banana', 'grap', 'cactus']
const combined = [...Fruits1, ...Fruits2]
console.log(combined);
//spread operator for function arguments

var numbers = [1, 2, 3]

function addnumbers(x, y, z) {
    return x + y + z;

}
const results = addnumbers(...numbers);
console.log(`results: ${results}`);


//Rest operater in function parameters
function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);

}
const result = multiply(...numbers);
console.log(`result: ${result}`);
//spread value
let colors = ['red', 'green', 'blue', 'yellow'];
let copiedcolors = [...colors];
console.log(`copiedcolors: ${copiedcolors}`);