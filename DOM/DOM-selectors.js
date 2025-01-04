// =============================
//        DOM Selectors
// =============================

// 1. getElementById()
let id_element = document.getElementById("buttons");
console.log(id_element);

// 2. getElementsByClassName()
let class_element = document.getElementsByClassName("btn");
console.log(...class_element);
// OR
for(let i = 0; i < class_element.length; i++) {
    console.log(class_element[i]);
}
// OR
for(let item of class_element) {
    console.log(item);
}

// 3. getElementsByTagName()
let tag_element = document.getElementsByTagName("p");
console.log(...tag_element);
// OR 
for(let i = 0; i < tag_element.length; i++) {
    console.log(tag_element[i]);
}
// OR
for(let item of tag_element) {
    console.log(item);
}

// 4. querySelector()
// let query_selector = document.querySelector("#buttons");
// let query_element = document.querySelector(".btn");
// let query_element = document.querySelector("h2");
let query_element = document.querySelector("button.btn");
console.log(query_element);

// 5. querySelectorAll()
// let all_query_element = document.querySelectorAll("#buttons");
// let all_query_element = document.querySelectorAll(".btn");
// let all_query_element = document.querySelectorAll("button.btn");
let all_query_element = document.querySelectorAll("h2");
console.log(...all_query_element);
// OR
for(let i = 0; i < all_query_element.length; i++) {
    console.log(all_query_element[i]);
}
// OR
for(let item of all_query_element) {
    console.log(item);
}