// ============================
//        Input Events
// ============================

// Element Reference
// let input_element = document.querySelector("input");
// let form = document.querySelector("#myForm");

// Event Handler
// const handleInput = (event) => {
  // console.log(event);
  // console.log(`Input Value: ${event.target.value}`); // (OR)
  // console.log(`Input Value: ${event.srcElement.value}`); // (target same as srcElement)
  // console.log(`Input Name: ${event.srcElement.name}`); // (OR)
  // console.log(`Input Name: ${event.target.name}`); // (target same as srcElement)
  // console.log(`Input Type: ${event.inputType}`);
  // console.log(`Event Type: ${event.type}`);
  // Output
  // document.querySelector(
  //   ".input-value"
  // ).textContent = `Input Value: ${event.target.value}`;
  // document.querySelector(
  //   ".input-name"
  // ).textContent = `Input Name: ${event.target.name}`;
  // document.querySelector(
  //   ".input-type"
  // ).textContent = `Input Type: ${event.inputType}`;
  // document.querySelector(
  //   ".event-type"
  // ).textContent = `Event Type: ${event.type}`;
// };

// Event Listener

// 1. Input Event
// Fires when the value of an input or textarea element changes.
// input_element.addEventListener("input", handleInput);

// 2. Change Event
// Fires when the value of an input element is changed and loses focus (e.g., after typing and pressing Enter or tabbing out).
// input_element.addEventListener("change", handleInput);

// 3. Focus Event
// Fires when an element gains focus.
// input_element.addEventListener("focus", handleInput);

// 4. Blur Event
// Fires when an element loses focus.
// input_element.addEventListener("blur", handleInput);

// 5. Submit Event
// Fires when a form is submitted.
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent default form submission
//   console.log(event);
//   document.querySelector(
//     ".input-value"
//   ).textContent = `Input Value: ${event.target[0].value}`;
//   document.querySelector(
//     ".input-name"
//   ).textContent = `Input Name: ${event.target[0].name}`;
//   document.querySelector(
//     ".input-type"
//   ).textContent = `Input Type: ${event.target[0].type}`;
//   document.querySelector(
//     ".event-type"
//   ).textContent = `Event Type: ${event.type}`;
// });
