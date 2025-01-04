let btn1 = document.querySelector('#anchor');
let btn2 = document.querySelector(".btn");

// ==============================
//       DOM Event Handler
// ==============================

// 1st Method
// btn1.onclick = () => {
//     alert("Hello Muhammad Hussain");
// }
// 2nd Method
// btn2.onclick = function() {
//     alert("Hello Muhammad Hussain");
// }

// ==============================
//      addEventListener()
// ==============================

// element.addEventListener(event, handler, options);

function myFunc() {
    alert("Hye Guys !!!");
}
const greet = () => {
    alert("Welcome back !!!");
}
btn1.addEventListener("click", myFunc);
btn2.addEventListener("click", greet);

// ==============================
//      removeEventListener()
// ==============================

// element.removeEventListener(event, handler, options);

btn1.removeEventListener("click", myFunc);
btn2.removeEventListener("click", greet);