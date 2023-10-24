// what to do ?
// how to do ?
function countdownTimer(count) {
    const timer = setInterval(function() {
        count--;
        if (count == 0) {
            console.log("Time's up");
            clearInterval(timer);
        }
    }, 1000)
}
countdownTimer(5)