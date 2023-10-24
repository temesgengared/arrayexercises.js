// how to do ?
// what to do ? creat simple promise 
const simplepromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hellow my client");
    }, 2000);

});

simplepromise
    .then(promiseresult => {
        return promiseresult;
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    })

// how to do ? delay a message
// what to do ? using  set timeout
function delayedMessage(delay) {
    setTimeout(function() {
        console.log('dalayed message');
    }, delay)
}
delayedMessage(5000);