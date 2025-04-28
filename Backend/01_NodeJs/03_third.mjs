// NOTE: By default Node.js understand common js module, to make it work we need to make a file with .mjs extension
// which explicitly tells the Node that run this file with morden js module which ES module (ECMAScript Module).

function add(a, b){
    console.log(a+b);
}

export default add;

// Now to go the forth.js file to use it.

// Note: We are using .mjs here to tell the Node that this file is a ES Module but you don't  need to do
// this if have any bundler (like vite) Or when you initialise the project with npm and has type = "module"
// in your package.json file. Both ways works fine and better.