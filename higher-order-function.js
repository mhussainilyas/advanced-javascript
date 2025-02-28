// ============================
//    Higher-order Function
// ============================
// In JavaScript, a higher-order function is a function that either takes one or more functions as arguments, returns a function, or both functions as its result.

// Key Characteristics of Higher-Order Functions:
// 1. Accept Functions as Arguments:
// They can take functions as parameters, allowing for operations to be defined generically.
// 2. Return Functions:
// They can produce new functions, which can encapsulate behavior or state.

// Common Examples of Higher-Order Functions:
// ==========================================

// 1. Array Methods:
// -----------------
// Many array methods in JavaScript are higher-order functions, such as:
// .map()
// .filter()
// .reduce()
// Example of .map():
// const arr = [1, 2, 3, 4, 5];
// let square = arr.map((num, i, arr) => {
//   return num * num;
// });
// console.log(arr);
// console.log(square);

// 2. Creating Functions
// ---------------------
// You can create higher-order functions that generate other functions.
// function makeMultiplier(factor) {
//   function numFunction(x) {
//     return x * factor;
//   }
//   return numFunction;
// }
// const double = makeMultiplier(10);
// console.log(double(5)); // output: 50

// 3. Function Composition
// -----------------------
//  Higher-order functions can facilitate composing multiple functions together.
function compose(f, g) {
  function myFunc(x) {
    return f(g(x));
  }
  return myFunc;
}

const add = (x) => x + 1;
const square = (x) => x * x;
const addAndSquare = compose(add, square);
console.log(addAndSquare(5));