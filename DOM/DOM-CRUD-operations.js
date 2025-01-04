// =============================
//     CRUD Operation (DOM)
// =============================

// ---------- Create(Adding) ----------

// create element
const div = document.createElement("div");
// create text node
const text_node = document.createTextNode("Hussain");
// Set attributes
div.id = "newDiv";
div.className = "container";
div.setAttribute("data-custom", "value");
// Add content
div.textContent = "New div content";
// OR
// div.innerText = 'New div content';
// OR
// div.innerHTML = '<span>HTML content</span>';
// Add styles
div.style.backgroundColor = "blue";
div.style.color = "white";
// Add to DOM
document.body.appendChild(div);
// or insert at specific position
const parentElement = document.querySelector("body");
parentElement.insertBefore(div, parentElement.firstChild);
// parentElement.insertBefore(div, parentElement.lastChild);

// ---------- Read(Accessing) ----------

// single element
const element = document.getElementById("anchor");
const elementByQuery = document.querySelector(".btn");
// Multiple element
const elements = document.getElementsByClassName("main");
const elementsByTag = document.getElementsByTagName("div");
const elementsByQueryAll = document.querySelectorAll("div#buttons");
// read attributes
const id = element.id;
const className = element.className;
const customAttr = element.getAttribute("data-custom");
// Read content
const text = element.textContent;
const html = element.innerHTML;
// Read styles
const colour = element.style.color;
const computedStyle = window.getComputedStyle(element);
// Check existence
const hasClass = element.classList.contains("myClass");
const hasAttribute = element.hasAttribute("data-custom");

// ---------- Update(Modufying) ----------

const newElement = document.querySelector("div#newDiv");
// Update attributes
newElement.id = "newId";
newElement.className = "newClass";
newElement.setAttribute("data-custom", "newValue");
// Update classes
newElement.classList.add("newClass");
newElement.classList.toggle("toggleClass");
// Update content
newElement.textContent = "New content";
newElement.innerHTML = "<span>New HTML</span>";
// Update styles
newElement.style.backgroundColor = "red";
newElement.style.cssText = "color: blue; font-size: 16px;";
// newElement
const newParent = document.querySelector("#buttons");
newParent.appendChild(newElement); // Moves element to new parent

// ---------- Delete(Removing) ----------

let myElement = document.querySelector("div#buttons");
console.log(myElement);
// Remove element
newElement.remove();
// Remove child
myElement.removeChild(document.querySelector("button.btn")); // OR
myElement.firstElementChild.remove();
// Clear contents
element.textContent = ""; // or
element.innerHTML = "";
// Remove attributes
element.removeAttribute("data-custom");
element.classList.remove("className");
// Remove all children
while (myElement.firstChild) {
    myElement.removeChild(myElement.firstChild);
}
