// =================
//   Callback Hell
// =================
// Callback hell, often referred to as "Pyramid of Doom," occurs in JavaScript when you have multiple nested callbacks, making your code hard to read, maintain, and debug. This commonly happens in asynchronous programming where functions are executed in response to the completion of other functions, leading to deeply nested structures.

// Examples of callback hell.
// =========================

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi!!! I'm Muhammad Hussain.");
    setTimeout(() => {
      console.log("My father name is Muhammad Ilyas.");
      setTimeout(() => {
        console.log("I'm 19 years old.");
        setTimeout(() => {
          console.log("I like coding.");
          setTimeout(() => {
            console.log("I lived in Lahore.");
            setTimeout(() => {
                console.log("I love my country.");
              }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
