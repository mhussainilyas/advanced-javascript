// =============
//   Promises
// =============
// In JavaScript, Promises are a powerful way to handle asynchronous operations. They are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to write cleaner and more readable code by avoiding "callback hell" and making error handling more straightforward.

// Basic Promise Structure
// =======================
// A Promise has three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Creating a Promise:
// ===================
// You create a promise using the Promise constructor. To handle the result of a promise, you can use the .then() method for fulfilled promises and the .catch() method for rejected ones
// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hye, I miss you 🥺");
//     reject("I am sorry.");
//   }, 5000);
// });

// pr.then((res) => {
//   console.log(res);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, we all miss you and keep smiling. 😊");
//   });

// ==================
//   Example Usage
// ==================

// const studentName = "Hussain";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;
//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}.`);
//       } else {
//         reject(`Enrollment failed for ${studentName}, please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });