// Selecting elements using CSS selectors
const element1 = document.querySelector("#myElement"); // Selects an element with id "myElement"
const elements1 = document.querySelectorAll(".myClass"); // Selects all elements with class "myClass"
const elements2 = document.querySelectorAll("div"); // Selects all <div> elements

// Selecting elements using Element.querySelector
const parentElement = document.querySelector("#parentElement");
const childElement = parentElement.querySelector(".childElement"); // Selects a child element with class "childElement"

// Selecting elements using Document.querySelector
const element2 = document.documentElement.querySelector("body"); // Selects the <body> element

// Selecting elements using Document.querySelectorAll
const elements3 = document.querySelectorAll("p"); // Selects all <p> elements
// Selecting elements by ID
const element1 = document.getElementById("myElement"); // Selects an element with id "myElement"

// Selecting elements by class name
const elements1 = document.getElementsByClassName("myClass"); // Selects all elements with class "myClass"

// Selecting elements by tag name
const elements2 = document.getElementsByTagName("div"); // Selects all <div> elements

// Selecting elements by name attribute
const elements3 = document.getElementsByName("myName"); // Selects all elements with name attribute "myName"
