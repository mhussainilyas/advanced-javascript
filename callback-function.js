// ======================
//   Callback Function
// ======================
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a fundamental part of JavaScript, especially for handling asynchronous operations like API requests, timers, and event handling.

// How Callbacks Work
// ==================
// 1. Definition:
// --------------
// A callback function is defined separately and then passed to another function. This allows that function to call the callback at the appropriate time.
// 2. Execution Order:
// -------------------
// The calling function can execute the callback at its discretion, usually when it has completed its tasks or when an event occurs.

// Examples Of Callback Function.
// ==============================
// callback function.
// function processUserInput(name, callback) {
//   console.log("Received Input " + name);
//   callback(name);
// }
// // Function to be used as a callback.
// function greetUser(name) {
//   console.log(`Assalamo-o-alaikum!!! ${name}`);
// }
// processUserInput("Hussain", greetUser);

// Interview Question.
// ===================
// write a program to perform mathematical operations, using callback function and two variable in javascript.

// Higher-order function.
const mathOperation = (x, y, operation) => {
  return operation(x, y);
};

// Callback function
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// function call
console.log(mathOperation(50, 10, add));
console.log(mathOperation(50, 10, sub));