let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);

}
let colors = ['red', 'green', 'blue', ];
colors.forEach((color) => {
    console.log(color)
});

let grades = [10, 20, 30, 40, 50, 60];
let squaredgrades = grades.map((grade) => {
    return grade * grade;

});
console.log(squaredgrades);

let ages = [15, 17, 19, 22, 24];
//if (isNaN(ages) || (ages <= 18)) {
const adult = ages.filter((ages) => {
    return ages >= 18;


})


//}
console.log(adult);