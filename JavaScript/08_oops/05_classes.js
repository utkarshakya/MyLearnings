
// In JavaScript, classes are just syntactic sugar over constructor functions.
// The 'class' keyword makes it easier to write and understand object-oriented code,
// but under the hood, it still uses functions and prototypes.

// Example using class syntax:
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

// Equivalent code using constructor function and prototype:
// function User(name) {
//     this.name = name;
// }
// User.prototype.greet = function() {
//     console.log(`Hello, ${this.name}`);
// };


// Inheritance using class syntax:
class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    showRole() {
        console.log(`${this.name} is an ${this.role}`);
    }
}

// Equivalent inheritance using prototypal inheritance:
// function Admin(name, role) {
//     User.call(this, name); // call parent constructor
//     this.role = role;
// }
// Admin.prototype = Object.create(User.prototype); // inherit prototype
// Admin.prototype.constructor = Admin;
// Admin.prototype.showRole = function() {
//     console.log(`${this.name} is an ${this.role}`);
// };

// Both class inheritance and prototypal inheritance achieve the same result:
// Admin objects inherit properties and methods from User.


// The static keyword in a class defines a method or property that belongs to the class itself, not to instances of the class.
// Static methods are called on the class, not on objects created from the class.

class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(2, 3)); // Output: 5

// You cannot call static methods on instances:
// const helper = new MathHelper();
// helper.add(2, 3); // Error: helper.add is not a function


// Why was the class syntax introduced in JavaScript?
// The class syntax was added to make object-oriented programming easier to write and understand.
// It provides a cleaner and more familiar way to define objects and inheritance, especially for people coming from other languages like Java or C++.
// Under the hood, it still uses functions and prototypes, but the class syntax makes code more readable and organized.