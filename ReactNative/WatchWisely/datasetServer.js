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

/**
 * GET /categories
 * ---------------
 * Lists all dataset categories.
 * Each category corresponds to a folder under the DATA_ROOT.
 */
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

/**
 * GET /categories/:cat/pages/:page
 * --------------------------------
 * Serves a dataset page file within a given category.
 * Examples of valid URLs:
 *   /categories/animals/pages/1
 *   /categories/animals/pages/page1
 *
 * File naming patterns supported:
 *   <category>_page1.json
 *   <category_without_pages>_page1.json
 */
app.get("/categories/:cat/pages/:page", (req, res) => {
  const { cat, page } = req.params;
  const pageNum = page.replace(/^page/, ""); // normalize page param
  const catFolder = path.join(DATA_ROOT, cat);

  const possibleFiles = [
    path.join(catFolder, `${cat.replace("_pages", "")}_page${pageNum}.json`),
    path.join(catFolder, `${cat}_page${pageNum}.json`),
  ];

  // Return the first file found
  const filePath = possibleFiles.find((file) => fs.existsSync(file));

  if (!filePath) {
    return res.status(404).json({
      error: "page not found",
      tried: possibleFiles,
    });
  }

  res.sendFile(filePath);
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Dataset server running at http://localhost:${PORT}`);
});


