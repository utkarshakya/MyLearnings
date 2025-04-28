# Mongoose Schema Methods in MongoDB

Mongoose provides a powerful way to define schemas for MongoDB collections. A schema defines the structure of the documents within a collection, including field types, default values, and validation rules. Additionally, Mongoose allows you to define **instance methods** and **static methods** on schemas.

## Types of Schema Methods

### 1. Instance Methods

Instance methods are functions that operate on individual documents created from a Mongoose model. These methods are defined on the schema and can be called on a document instance.

Example

```javascript
// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Add an instance method
userSchema.methods.greet = function () {
  return `Hello, ${this.name}!`;
};

// Create a model
const User = mongoose.model('User', userSchema);

// Use the instance method
const user = new User({ name: 'John', email: 'john@example.com' });
console.log(user.greet()); // Output: Hello, John!
```

### 2. Static Methods

Static methods are functions that operate at the model level rather than on individual documents. These methods are defined on the schema and can be called directly on the model.

Example

```javascript
// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Add a static method
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// Create a model
const User = mongoose.model('User', userSchema);

// Use the static method
User.findByEmail('john@example.com').then((user) => {
  console.log(user);
});
```

## Summary

- **Instance Methods**: Operate on individual documents and are called on document instances.
- **Static Methods**: Operate on the model itself and are called directly on the model.

These methods make Mongoose highly flexible and allow you to encapsulate reusable logic within your schema.
