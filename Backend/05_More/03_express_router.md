# Express Router

Express Router is a feature in Express.js that helps organize your application into smaller, modular, and manageable pieces. It allows you to define routes for different parts of your application in separate files or modules.

## Key Features

- **Modularity**: Break down routes into smaller files for better organization.
- **Middleware Support**: Attach middleware to specific routes or groups of routes.
- **Reusability**: Reuse the router for different parts of the application.

## Example

Here’s how to use Express Router:

### Defining Routes in a Router

```javascript
const express = require('express');
const router = express.Router();

// Define routes
router.get('/users', (req, res) => {
  res.send('List of users');
});

router.post('/users', (req, res) => {
  res.send('Create a user');
});

module.exports = router;
```

### Using the Router in the Main App

```javascript
const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // Import the router

// Use the router
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example:

- Routes for `/users` are defined in a separate file.
- The router is mounted on `/api`, so the routes become `/api/users`.

Express Router makes it easier to manage and scale your application by keeping your code modular and organized.
