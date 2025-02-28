// ======================
//    Promise Methods
// ======================

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise - 01");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed.");
  }, 7000);
});

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise - 02");
//   }, 5000);
// });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise - 03");
  }, 9000);
});

// 1. Promise.all():
// =================
// Takes an array of Promises and returns a single Promise that resolves when all of the Promises have resolved, or rejects if any of the Promises rejects.
// Promise.all([promise2, promise3, promise1])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 2. Promise.allSettled():
// ========================
// Similar to Promise.all(), but resolves when all Promises have settled (either fulfilled or rejected), returning an array of objects that each describe the outcome.
// Promise.allSettled([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. Promise.race():
// ==================
// Returns a Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects, with the value or reason from that Promise.
  Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });