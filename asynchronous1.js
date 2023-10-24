// how to do ?
// what to do ? 
// creat function called sum that takes two numbers and a callback
// function as arguments to calculate the sum of the two numbers and invoke the callback
const add = (result) => {
    return result;
}

function sum(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        return;
    }
    const sum = a + b;
    return callback(sum);
}
console.log(`sumation result:${sum(6,6,add)}`)