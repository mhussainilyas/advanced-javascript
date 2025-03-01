// ==================
//   Async & Await
// ==================
// In JavaScript, async and await are used to handle asynchronous operations more effectively, allowing you to write asynchronous code that looks and behaves like synchronous code.

// 1. async Keyword:
// The async keyword is placed before a function declaration. It indicates that the function will return a Promise. Even if you return a normal value, it will automatically be wrapped in a resolved promise.

// 2. await Keyword:
// The await keyword is used inside an async function to pause the execution of the function until the Promise is resolved or rejected. This allows you to write cleaner code without chaining multiple .then() calls.

// let apiUrl = "https://icanhazdadjoke.com/";

// const fetchData = async () => {
//   let res = await fetch(apiUrl, {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   let data = await res.json();
//   console.log(data.joke);
// };

// fetchData();

// ===================
//   Error Handling
// ===================
// You can handle errors in async/await through try/catch blocks, which is generally more readable than handling errors with promise chaining.

let apiUrl = "https://icanhazdadjoke.com/";

const fetchData = async () => {
  try {
    let res = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    let data = await res.json();
    document.write(data.joke);
  } catch (error) {
    console.log(error);
    document.write("API isn't working!!!")
  }
};

fetchData();
