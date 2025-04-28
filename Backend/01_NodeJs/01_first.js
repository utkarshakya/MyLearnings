console.log("Hello, I am First.");

function sum(a, b){
    console.log(a+b);
}

module.exports = sum;
// We need to export it to make it public otherwise it is private and go in the form of IIFE
// Also Note that module.exports is an empty object (you can log it in console to check) so we can export it like
// module.exports = {sum} OR module.exports.sum = sum OR module.exports = {sum: sum} and we can also export multiple elements, but
// as you export you also need to require it in the same way to use it in other files.

// Go to second file and try to run it.