# Basic CRUD Commands in MongoDB Using Mongoose

This document covers the basic **CRUD (Create, Read, Update, Delete)** operations in MongoDB using **Mongoose**, along with simple definitions and examples.

---

## 1. Create (Insert Data)

- **Definition**: Add a new document to a collection.
- **Command**: Use the `.save()` method or `Model.create()`.

Example:

```javascript
// ...existing code...
const newUser = new User({ name: "Sia", age: 24, email: "sia@example.com" });
await newUser.save(); // Saves the document to the database

// Alternatively, use create()
await User.create({ name: "Sia", age: 24, email: "Sia@example.com" });
```

---

## 2. Read (Retrieve Data)

- **Definition**: Fetch documents from a collection based on a query.
- **Command**: Use `.find()`, `.findOne()`, or `.findById()`.

Examples:

```javascript
// ...existing code...
const adults = await User.find({ age: { $gte: 18 } });
// The $gte operator means "greater than or equal to" it is simple MongoDB query syntax
// It simply means, find all users with age >= 18, We'll see more about MongoDB query syntax in the next section

// Find a single user by a field
const user = await User.findOne({ email: "sia@example.com" });

// Find a user by ID
const userById = await User.findById("642c1f9e5f1b2c0012345678");
```

---

## 3. Update (Modify Data)

- **Definition**: Update existing documents in a collection.
- **Command**: Use `.updateOne()`, `.updateMany()`, or `.findByIdAndUpdate()`.

Examples:

```javascript
// Update a single document
await User.updateOne({ email: "sia@example.com" }, { $set: { age: 35 } });

// Update multiple documents
await User.updateMany({ age: { $lt: 18 } }, { $set: { status: "minor" } });

// Find a document by ID and update it
const updatedUser = await User.findByIdAndUpdate(
  "642c1f9e5f1b2c0012345678",
  { age: 40 },
  { new: true } // Return the updated document
);
```

---

## 4. Delete (Remove Data)

- **Definition**: Remove documents from a collection.
- **Command**: Use `.deleteOne()`, `.deleteMany()`, or `.findByIdAndDelete()`.

Examples:

```javascript
// Delete a single document
await User.deleteOne({ email: "sia@example.com" });

// Delete multiple documents
await User.deleteMany({ age: { $lt: 18 } });

// Find a document by ID and delete it
const deletedUser = await User.findByIdAndDelete("642c1f9e5f1b2c0012345678");
```

---

## Summary Table

| **Operation** | **Command**                     | **Description**                              |
|---------------|----------------------------------|----------------------------------------------|
| **Create**    | `.save()`, `Model.create()`      | Add a new document to the collection         |
| **Read**      | `.find()`, `.findOne()`, `.findById()` | Retrieve documents from the collection       |
| **Update**    | `.updateOne()`, `.updateMany()`, `.findByIdAndUpdate()` | Modify existing documents                   |
| **Delete**    | `.deleteOne()`, `.deleteMany()`, `.findByIdAndDelete()` | Remove documents from the collection        |
