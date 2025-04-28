# Connecting to MongoDB with a Backend

## 1. Install MongoDB Driver

For Node.js, install the official MongoDB driver using npm:

```bash
npm install mongodb
```

## 2. Connect to MongoDB

Use the MongoDB connection string provided by MongoDB Atlas or your local MongoDB instance. Below is an example of connecting to MongoDB in a Node.js backend:

```javascript
const { MongoClient } = require('mongodb');

// Connection URI (replace <username>, <password>, and <cluster-url> with your details)
const uri = "mongodb+srv://<username>:<password>@<cluster-url>/myDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access a database
    const database = client.db("myDatabase");

    // Access a collection
    const collection = database.collection("myCollection");

    // Example: Insert a document
    const result = await collection.insertOne({ name: "Peggy Carter", age: 70 });
    console.log("Document inserted with _id:", result.insertedId);

    // Example: Find documents
    const documents = await collection.find({}).toArray();
    console.log("Documents found:", documents);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

connectToDatabase();
```
