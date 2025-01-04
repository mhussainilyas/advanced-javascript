// =============================
//        DOM Navigation
// =============================

// ---------- For Nodes ----------

let element = document.querySelector("#buttons");

// 1. parentNode
let parent = element.parentNode;
console.log(parent);

// 2. childNodes
let child = element.childNodes;
// console.log(...child); 
console.log(child);

// 3. firstChild
let first_child = element.firstChild;
console.log(first_child);

// 4. lastChild
let last_child = element.lastChild;
console.log(last_child);

// 5. nextSibling
let next_sibling = element.nextSibling;
console.log(next_sibling);

// 6. previousSibling
let previous_sibling = element.previousSibling;
console.log(previous_sibling);

// ---------- For Elements ----------

let selector = document.querySelector("div.container");

// 1. parentElement
let parent_element = selector.parentElement;
console.log(parent_element);

// 2. children
let childs = selector.children;
// console.log(...childs); 
console.log(childs);

// 3. firstElementChild
let first_element = selector.firstElementChild;
console.log(first_element);

// 4. lastElementChild
let last_element = selector.lastElementChild;
console.log(last_element);

// 5. nextElementSibling
let next_element = selector.nextElementSibling;
console.log(next_element);

// 6. previousElementSibling
let previous_element = selector.previousElementSibling;
console.log(previous_element);