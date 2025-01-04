// =============================
//       Keyboard Events
// =============================

// element reference
// let element = document.querySelector("input");
// let key_pressed = document.querySelector("p.key-pressed");
// let key_code = document.querySelector("p.key-code");
// let char_code = document.querySelector("p.char-code");
// let event_type = document.querySelector("p.event-type");

// function to perform
// const handleKeyboard = (event) => {
//   console.log(event);
//   key_pressed.textContent = `Key pressed: ${event.key}`;
//   key_code.textContent = `Key code: ${event.code}`;
//   char_code.textContent = `Char codeAt: ${event.key.charCodeAt(0)}`;
//   event_type.textContent = `Event Type: ${event.type}`;
// }

// adding event to the refered element
// element.addEventListener("keydown", handleKeyboard);
// element.addEventListener("keyup", handleKeyboard);

// =============================
//   Keyboard Event Properties
// =============================

// Each keyboard event object provides several useful properties:
// 1. 'key': Returns the value of the key pressed (e.g., "a", "Enter", "ArrowUp").
// 2. 'code': Represents the physical key on the keyboard (e.g., "KeyA", "ArrowLeft", "Digit1").
// 3. 'keyCode': (Deprecated)	Returns the numeric code of the key (e.g., 65 for "A"). Use key or code instead.
// 4. 'altKey':	Returns true if the Alt key was pressed during the event.
// 5. 'ctrlKey': Returns true if the Ctrl key was pressed during the event.
// 6. 'shiftKey': Returns true if the Shift key was pressed during the event.
// 7. 'metaKey': Returns true if the Meta key (e.g., Command on macOS) was pressed during the event.
// 8. 'repeat': Returns true if the key is being held down (triggering repeated events).

// =============================
//  Preventing Default Behavior
// =============================

// You can prevent the default action of a keyboard event (e.g., preventing scrolling with arrow keys):
document.addEventListener("keydown", (event) => {
  if(event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault(); // Prevents the page from scrolling
    console.log(`Arrow Key Pressed: ${event.key}`);
  }
});