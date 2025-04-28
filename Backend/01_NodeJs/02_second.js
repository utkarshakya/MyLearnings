const sum = require("./first");

sum(2, 4) // we can access it if it was exported
console.log("And I am Second.")

// NOTE: Although It works and also used in production but it's a little old practice, and now
// days we have import and export to do the same

// This is called Common JS module and new one is known as ES Module (Check 3rd and 4th file for that).