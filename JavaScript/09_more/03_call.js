function setUsername(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  //   setUsername(username);
  // The above line of code don't work.
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const newUser = new createUser("kingpin", "king@pin.com", "king@1234");
console.log(newUser);

// Explanation:
// Directly calling setUsername(username) inside createUser does not work as expected because 'this' inside setUsername refers to the global object (or undefined in strict mode), not the instance being created by createUser.
// As a result, 'this.username' sets a property on the global object, not on the intended user object.
// Using setUsername.call(this, username) explicitly sets the value of 'this' inside setUsername to the current instance of createUser.
// This ensures that 'username' is assigned to the correct object being constructed.

// Similar methods:
// 1. apply(): Works like call(), but takes arguments as an array.
//    Example:
//    setUsername.apply(this, [username]);
//
// 2. bind(): Returns a new function with 'this' bound to the provided value.
//    Example:
//    const boundSetUsername = setUsername.bind(this);
//    boundSetUsername(username);
