// ========================
//    Event Propagation
// ========================
// Event propagation in JavaScript refers to the way events flow through the DOM (Document Object Model) hierarchy when an event occurs.
// It involves two main phases:
// 1) capturing.
// 2) bubbling.

let outer = document.querySelector(".outer");
let middle = document.querySelector(".middle");
let inner = document.querySelector(".inner");

const callOuter = (event) => {
  console.table([
    {
      description: "I am the outer one.",
      Target: event.target,
      CurrentTarger: event.currentTarget,
    },
  ]);
};

const callMiddle = (event) => {
  console.table([
    {
      description: "I am the middle one.",
      Target: event.target,
      CurrentTarger: event.currentTarget,
    },
  ]);

  // stopPropagation() is used to stop the propagation.
  event.stopPropagation();
};

const callInner = (event) => {
  console.table([
    {
      description: "I am the inner one.",
      Target: event.target,
      CurrentTarger: event.currentTarget,
    },
  ]);
};

// ====================
//   Capturing Phase
// ====================
// The event starts from the root of the DOM tree and propagates down to the target element.
// You can listen for events during this phase by adding an event listener with the third parameter set to true.
// outer.addEventListener("click", callOuter, true);
// middle.addEventListener("click", callMiddle, true);
// inner.addEventListener("click", callInner, true);

// ====================
//   Bubbling Phase
// ====================
// After reaching the target element, the event bubbles back up to the root.
// This is the default phase and is often used for attaching event listeners.
// You can listen for events during this phase by adding an event listener with the third parameter set to false.
outer.addEventListener("click", callOuter, false);
middle.addEventListener("click", callMiddle, false);
inner.addEventListener("click", callInner, false);
