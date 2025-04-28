import express from "express";

const app = express();

app.use("/about", (req, res) => {
    res.send("About Page")
})

app.use("/", (req, res) => {
    res.send("Home Page")
})

app.listen("8000", () => {
    console.log("Express is running at localhost:8000")
})

// Now run this file with express or nodemon (recommended) and see the result
// Make sure you have installed dependencies by running `npm i`
// You can simple run by `nodemon file_name` in the terminal and see the result on the 
// given port in the browser or in the postman.