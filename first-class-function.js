// ====================================
//    First-Class Function (Concept)
// ====================================
// The concept of "first-class functions" is a fundamental principle in programming languages that treat functions as first-class citizens. This means that functions can be treated like any other variable in the language. Here are the key aspects of first-class functions:

// 1. Assignment
// Functions can be assigned to variables
// function sayHello(name) {
//   let result = `Assalam-o-alaikum!!! ${name}`;
//   return result;
// }
// let greet = sayHello;
// console.log(greet("Hussain"));

// 2. Passing as Arguments
// Functions can be passed as arguments to other functions. This allows for higher-order functions that can take other functions as input.
// function executeFunction(func) {
//   func();
// }
// function greet() {
//   console.log("Hello Mr...");
// }
// executeFunction(greet);

// 3. Returning Functions from Functions
// Functions can return other functions, allowing for closures and encapsulated behavior.
// function greeting(message) {
//   function myFunc() {
//     console.log(message);
//   }
//   return myFunc;
// }
// const createGreet = greeting("Hello, World");
// createGreet();

// 4. Storing Functions in Data Structures
//  Functions can be stored in arrays, objects, or other data structures.
// const functionArray = [
//   function () {
//     console.log("Function 01");
//   },
//   function () {
//     console.log("Function 02");
//   },
//   function () {
//     console.log("Function 03");
//   },
// ];
// functionArray[1]();

// 5. Anonymous and Named Functions
// JavaScript supports both named and anonymous (or unnamed) functions as first-class citizens.
// const anonyFunction = function () {
//   console.log("This is anonymous function.");
// };
// anonyFunction();
// function namedFunction() {
//   console.log("This is named function.");
// }
// namedFunction();

// 6. Arrow Functions
// With ES6, arrow functions provide a more concise syntax for writing functions, further emphasizing the idea of functions as first-class entities.
const add = (a, b) => a + b;
console.log(add(10, 20));