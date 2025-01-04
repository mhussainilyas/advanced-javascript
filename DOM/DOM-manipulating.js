// ===========================
//     DOM Manipulating
// ===========================

// --------- Creating Elements ---------

// creating element
let new_div = document.createElement("div");
console.log(new_div);
// creating text node
let text_node = document.createTextNode("Muhammad Hussain");
console.log(text_node);
console.log(text_node.textContent);
// Append text_node to new_div
new_div.appendChild(text_node);
console.log(new_div);

// --------- Modifying Elements ---------

let new_element = document.createElement("p");
// .textContent 
new_element.textContent = "Hello World";
console.log(new_element);
// .innerHTML
new_element.innerHTML = "<span>Hussain</span>";
console.log(new_element);
// Modifying Atributes
new_element.setAttribute("class", "my-para");
console.log(new_element);
let attr = new_element.getAttribute("class")
console.log(attr);
new_element.removeAttribute("class");
console.log(new_element);
// Modifying Style
new_element.style.backgroundColor = "blue";
new_element.style.fontSize = "16px";

// --------- Adding and Removing Elements ---------

let parent_div = document.createElement("div");
let child_div = document.createElement("div");
child_div.setAttribute("id", "child");
// .appendChild()
parent_div.appendChild(child_div);
console.log(parent_div);
// .insertBefore(newElement, referenceElement);
parent_div.insertBefore(new_element, child_div);
console.log(parent_div);
// removing element
child_div.remove();
console.log(parent_div);
parent_div.removeChild(new_element);
console.log(parent_div);

// --------- Class Manipulation ---------

let my_heading = document.createElement("h1");
my_heading.classList.add("my-class-2", "my-class-3");
my_heading.classList.remove("my-class-3");
let has_class = my_heading.classList.contains("my-class-2"); // true or false
my_heading.classList.toggle("my-class-3"); // add or remove
console.log(my_heading);
console.log(has_class);

// --------- Attribute Manipulation ---------
let para = document.createElement("p");
let has_attr = para.hasAttribute("class"); // true or false
para.setAttribute("id", "my-para");
let get_attr = para.getAttribute("id");
para.removeAttribute("id");
console.log(para);