// ============================
//         Mouse Events
// ============================

// element refering
// let element = document.querySelector("button.btn");
// let heading = document.querySelector("h2");
// let para = document.querySelector("p");

// functions to perform
// function handleHeading() {
//   heading.style.color = "red";
//   heading.style.textDecoration = "underline";
// }
// const handleParagraph = () => {
//   para.style.color = "blue";
// };
// const showAlert = () => {
//   alert("Hye!!! Muhammad Hussain.");
// };

// 1. click
// Fired when a user clicks on an element (left mouse button by default).
// element.addEventListener("click", handleHeading);

// 2. dblclick
// Fired when the user double-clicks on an element.
// element.addEventListener("dblclick", handleParagraph);

// 3. mousedown
// Triggered when the mouse button is pressed down.
// element.addEventListener("mousedown", showAlert);

// 4. mouseup
// Fired when the mouse button is released.
// element.addEventListener("mouseup", handleHeading);

// 5. mousemove
// Fires when the mouse pointer moves over an element.
// element.addEventListener("mousemove", handleParagraph);

// 6. mouseenter
// Triggered when the mouse pointer enters an element. (Doesn’t bubble.)
// element.addEventListener("mouseenter", showAlert);

// 7. mouseleave
// Triggered when the mouse pointer leaves an element. (Doesn’t bubble.)
// element.addEventListener("mouseleave", handleHeading);

// 8. mouseover
// Similar to mouseenter but bubbles up the DOM.
// element.addEventListener("mouseover", handleParagraph);

// 9. mouseout
// Similar to mouseleave but bubbles up the DOM.
// element.addEventListener("mouseout", showAlert);

// 10. contextmenu
// Fired when the user opens the context menu (usually right-click).
// element.addEventListener("contextmenu", handleHeading);

// ===============================
//       Mouse Event Object
// ===============================

// Each mouse event object contains useful properties:
// 1. clientX / clientY: Coordinates of the mouse pointer relative to the viewport.
// 2. pageX / pageY: Coordinates relative to the entire document.
// 3. screenX / screenY: Coordinates relative to the screen.
// 4. button: Indicates which mouse button was clicked (0 for left, 1 for middle, 2 for right).
// 5. buttons: Tracks all mouse buttons pressed at once.
// 6. target: The element that triggered the event.
// 7. relatedTarget: The element the pointer left or entered during mouseover or mouseout.
// 8. shiftKey, ctrlKey, altKey, metaKey: State of modifier keys during the event.

// =================================
//   Example: Dragging an Element
// =================================

let draggable = document.querySelector("button.btn");
let isDragging = false;
draggable.addEventListener("mousedown", (event) => {
//   console.log(event);
  isDragging = true;
  draggable.style.position = "absolute";
});
document.addEventListener("mousemove", (event) => {
  if(isDragging) {
    draggable.style.left = `${event.pageX}px`;
    draggable.style.top = `${event.pageY}px`;
  }
});
document.addEventListener("mouseup", () => {
    isDragging = false;
});
