import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.url === '/') res.end("Hello This is Home")
    else if (req.url === '/about') res.end("Hello This is About")
    else res.end("Page Not Found")
})

server.listen(8000, () => {
    console.log("Listing on default port 8000");
})
// This is listing to port 8000

// Now go to your browser and hit localhost:8000, you'll see the results