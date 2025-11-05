// dataset-server.js
// Run with: node datasetServer.js

import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// --- Setup __dirname equivalent for ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Configuration constants ---
const DATA_ROOT = path.join(__dirname, "dataset"); // Root dataset directory
const PORT = process.env.PORT || 3000;

// --- Express app setup ---
const app = express();

// Allow requests from all origins
app.use(cors());

// Serve static files from the dataset folder
app.use(express.static(DATA_ROOT));

/* GET /categories */
app.get("/categories", (req, res) => {
  fs.readdir(DATA_ROOT, { withFileTypes: true }, (err, items) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Only include directory names
    const categories = items
      .filter((item) => item.isDirectory())
      .map((dir) => dir.name);

    res.json(categories);
  });
});

/* GET /categories/:cat/page/:pn */
app.get("/categories/:cat/page/:pn", (req, res) => {
  try {
    const { cat, pn } = req.params;
    const catFolder = path.join(DATA_ROOT, cat);

    return res.sendFile(path.join(catFolder, `${cat}_page${pn}.json`));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* GET /categories/:cat/items/:noi */
app.get("/categories/:cat/items/:noi", (req, res) => {
  try {
    const { cat, noi } = req.params;
    const catFolder = path.join(DATA_ROOT, cat);

    // Select Random Page
    const manifestData = fs.readFileSync(path.join(catFolder, `${cat}_manifest.json`), "utf8");
    const manifestJson = JSON.parse(manifestData);
    const totalPages = manifestJson.total_pages;
    const pn = Math.floor(Math.random() * totalPages) + 1;

    // Read the data from the file
    const data = fs.readFileSync(path.join(catFolder, `${cat}_page${pn}.json`), "utf8");
    const jsonData = JSON.parse(data);  // This will be an array of objects
    let responseData = [];

    // Select Random Items
    let randomIndex = Math.floor(Math.random() * jsonData.length);
    for (let i = 0; i < noi; i++) {
      responseData.push(jsonData[randomIndex]);
      randomIndex = Math.floor(Math.random() * jsonData.length);
    }

    // Send the response
    return res.json(responseData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Dataset server running at http://localhost:${PORT}`);
});
