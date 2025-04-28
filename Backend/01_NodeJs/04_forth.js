import add from "./03_third.mjs";

add(3, 2)
// Now run this file.

// NOTE: In this file we don't use .mjs but it will still work because Node.js handle that
// internally and treat this file as ES Module only in case of import, that means for using import we
// don't strictly need to specify the ES-Module but it is  mandatory to tell Node.js if you are using export.
// You can verify that by changing the extension of 03_third.mjs file to .js, then this will work.