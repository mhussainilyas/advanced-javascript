// ===================================
//           Local Storage
// ===================================
// It is part of the Web Storage API and is used to store key-value pairs in a persistent way.
// console.log(window.localStorage);

// ==============================
//        Basic Operations
// ==============================

// setItem(key, value)
// it is used to set(store) a key-value pair in the local storage.
// window.localStorage.setItem("Hussain", "Web Developer");
// window.localStorage.setItem("My Age", "19");
// console.log(window.localStorage);

// getItem(key)
// it is used to get(retrieve) the value of a key from the local storage.
// let value = window.localStorage.getItem("Hussain");
// console.log(value);

// key(index)
// it is used to get the key of a value from the local storage.
// console.log(window.localStorage.key(1));

// removeItem(key)
// it is used to remove a key-value pair from the local storage.
// window.localStorage.removeItem("Hussain");
// console.log(window.localStorage);

// clear()
// it is used to remove all the key-value pairs from the local storage.
// window.localStorage.clear();
// console.log(window.localStorage);

// ==============================
//        Get All Keys
// ==============================

// window.localStorage.setItem("My Name", "Hussain");
// window.localStorage.setItem("My Field", "Web Developer");
// window.localStorage.setItem("My Age", "19");
// for (let i = 0; i < window.localStorage.length; i++) {
//   console.log(window.localStorage.key(i));
// }

// ===================================
//    Working with Objects & Arrays
// ===================================
// localStorage only stores strings, so you need to serialize and deserialize objects using JSON.stringify() and JSON.parse()

// JSON.stringify()
// it is used to convert an object or an array into a string.
// let obj = { name: "Hussain", age: 19 };
// let str = JSON.stringify(obj);
// console.log(str);

// JSON.parse()
// it is used to convert a string into an object or an array.
// let str = '{"name":"Hussain","age":19}';
// let obj = JSON.parse(str);
// console.log(obj);

// ===============================
//       Project Practice
// ===============================

// Elements
const addBtn = document.querySelector("button.add-btn");
const getBtn = document.querySelector("button.get-btn");
const deleteBtn = document.querySelector("button.delete-btn");

// Object
let studentData = {
  firstName: "Muhammad",
  lastName: "Hussain",
  age: 19,
  gender: "Male",
  grade: "A+",
  course: ["Math", "Science", "English"],
  address: {
    street: "123 Main St",
    city: "Lahore",
    state: "Punjab",
    zipCode: "54000",
  },
};

// Functions Definition
const addTodoList = () => {
  let data = JSON.stringify(studentData);
  window.localStorage.setItem("objectData", data);
};

const getTodoList = () => {
  let data = JSON.parse(window.localStorage.getItem("objectData"));
//   console.log(window.localStorage.getItem("objectData"));
//   console.log(typeof window.localStorage.getItem("objectData"));
  console.log(data);
  console.log(typeof data);
};

const deleteTodoList = () => {
  window.localStorage.clear();
};

// Add Data to LocalStorage
addBtn.addEventListener("click", () => {
  addTodoList();
});

// Get Data from LocalStorage
getBtn.addEventListener("click", () => {
  getTodoList();
});

// Delete Data from LocalStorage
deleteBtn.addEventListener("click", () => {
  deleteTodoList();
});
