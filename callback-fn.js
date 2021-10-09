// An example of callback function
function main(callback) {
    console.log(`I did something, let's call back`);
    callback("Yo, called");
}

main(function cb(arg) {
    console.log(arg);
});