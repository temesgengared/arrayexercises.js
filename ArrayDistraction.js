//analysis
//what to destructure extract the first two colors;skipping element and extract third one
// how to do? uising [firstitem, seconditem]


//distraction an array

const colors = ['red ', 'green ', 'blue']
console.log(colors[1, 2]);

// skipping element by useing[,,thirdelement]

let numbers = [1, 2, 3, 4, 5]
const [, , thirdnumber] = numbers;

console.log(thirdnumber);

// Rest parametr

const fruit = ['apple', 'orange', 'kiwi']
const [fristfruit, ...restfruit] = fruit
console.log(fristfruit);
console.log(restfruit);

// default values

const shapes = [];
const [frist = 'circle'] = shapes;
console.log(`frist: ${frist}`);

// swapping values
let x = 5;
let y = 6;
[x, y] = [y, x];
//console.log(x, y);
console.log(`x:${x} y:${y}`);