# MongoDB Overview

MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability, high performance, and ease of development. Unlike relational databases, MongoDB does not use tables and rows but instead uses collections and documents.

---

## Setting Up MongoDB Online

1. **Sign Up for MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create an account or log in.

2. **Create a Cluster**:
   - After logging in, click "Create a Cluster."
   - Choose a cloud provider (AWS, Azure, or GCP) and region.
   - Select a free or paid tier and deploy the cluster.

3. **Connect to the Cluster**:
   - Once the cluster is ready, click "Connect."
   - Whitelist your IP address and create a database user.
   - Use the provided connection string to connect via MongoDB Compass, shell, or your application.
   - We can also use VS Code MongoDB extension to connect to the cluster.

**Note:** MongoDB Atlas provides a free tier with limited resources, although there is way to run MongoDB locally, using Atlas is recommended because it is easy to setup and free for learning purpose.

---

## Key MongoDB Concepts

1. **Cluster**:
   - A cluster is a group of servers that host your MongoDB databases. In MongoDB Atlas, a cluster can be a single server (free tier) or a distributed setup for high availability.

2. **Database**:
   - A database is a container for collections. Example: `use('myDatabase')`.

3. **Collection**:
   - A collection is a group of documents, similar to a table in relational databases. Example: `db.myCollection`.

4. **Document**:
   - A document is a single record in a collection, stored in BSON (Binary JSON) format. Example:

     ```javascript
     {
       "_id": ObjectId("12345"),
       "name": "John Doe",
       "age": 30
     }
     ```

5. **Field**:
   - A field is a key-value pair in a document. Example: `"name": "John Doe"`.
