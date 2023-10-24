// how to do ?to validate email
// what to do ? passing the call back function
const printemail = (isvalid) => {
    isvalid ? console.log(`email is valid `) : console.log(`email is invalid`);
}

function validateemail(email, callback) {
    let at = email.includes('@');
    let dot = email.includes('.');
    // if (at && dot) {
    //     callback(true);
    // } else { callback(false); }
    at && dot ? callback(true) : callback(false);
}
validateemail('kahsaygared @gmail.com ', printemail);