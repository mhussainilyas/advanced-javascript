// ==================================
//    List of time based functions
// ==================================

// 1) setTimeout(function, milliSeconds)
// 2) setInterval(function, milliSeconds)
// 3) clearTimeout(timeoutID)
// 4) clearInterval(intervalID)

// === setTimeout() ===

// => Without parameters and arguments
// function delayedFunction() {
//     console.log("This function was delayed by 2000 milliseconds.");
// }
// setTimeout(delayedFunction, 2000);

// => With parameters and arguments
// function delayedFunction(sec) {
//     console.log(`This function was delayed by 5000 milliseconds. (${sec} seconds)`);
// }
// setTimeout(() => delayedFunction(5), 5000);

// === setInterval() ===

// => Without parameters and arguments
// function repeatedFunction () {
//     console.log("Assalam-o-Alaikum!!!");
// }
// setInterval(repeatedFunction, 2000);

// => With parameters and arguments
// function repeatedFunction (myName) {
//     console.log("Assalam-o-Alaikum!!!" + " " + myName);
// }
// setInterval(() => repeatedFunction("Hussain"), 2000);

// === clearTimeout() ===
// let myWork = setTimeout(() => {
//     console.log("Hye!!! Muhammad Hussain");
// }, 2000);
// clearTimeout(myWork);

// === clearInterval() ===
// let myWork = setInterval(() => {
//     console.log("Hye!!! Muhammad Hussain");
// }, 1000);
// clearInterval(myWork);
// clearing interval after 5 seconds
// setTimeout(() => {
//     clearInterval(myWork);
// }, 5000);

