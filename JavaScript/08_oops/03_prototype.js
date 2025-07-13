/*
// Every thing in javascript is object and object refers to null.
function hello() {
  console.log("Function hello is called");
}
hello();
hello.whatIsYourName = "kingpin";
console.log(hello.whatIsYourName);
console.log(typeof hello.prototype);
console.log(Object.prototype)
*/

/*
// Prototype Can Be Manipulated.
console.log(String.prototype);
String.prototype.whatIsString = () => {
  console.log("String is a collection of Characters.");
};
console.log(String.prototype);
*/

// Prototypal Inheritance
String.prototype.greet = function () {
  return "Hello, I am a string: " + this;
};

let myString = "World";
console.log(myString.greet()); // Output: Hello, I am a string: World

let anotherString = "JavaScript";
console.log(anotherString.greet()); // Output: Hello, I am a string: JavaScript
// See above both myString and anotherString don't have any method like greet but since they are string and String has
// greet() method which we have added in its prototype that why it is working because it is inheriting the method.
