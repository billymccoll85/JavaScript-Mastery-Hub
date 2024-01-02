// Get the parent element
const parentElement = document.getElementById('parent');

// Traversing Down the DOM Tree
// Children and Descendants
let children = element.children; // HTMLCollection of child elements
let childNodes = element.childNodes; // NodeList of child nodes (including text nodes)
let firstChild = element.firstChild; // First child node
let lastChild = element.lastChild; // Last child node
let firstElementChild = element.firstElementChild; // First child element
let lastElementChild = element.lastElementChild; // Last child element

// Traversing Up the DOM Tree
// Parent Elements
let parent = element.parentElement; // Direct parent element
let parentNode = element.parentNode; // Direct parent node (could be an element, document, or documentFragment)

// Traversing Sideways in the DOM Tree
// Siblings
let nextSibling = element.nextSibling; // Next sibling node
let previousSibling = element.previousSibling; // Previous sibling node
let nextElementSibling = element.nextElementSibling; // Next sibling element
let previousElementSibling = element.previousElementSibling; // Previous sibling element

// Advanced Traversal
// Query Selectors
let allDivsInsideElement = element.querySelectorAll('div'); // All div elements inside the element
let specificChild = element.querySelector('.specific-class'); // First element with specific class inside the element

// Navigating Using Node Relationships
function getAllAncestors(node) {
    let ancestors = [];
    while (node.parentNode) {
        ancestors.push(node.parentNode);
        node = node.parentNode;
    }
    return ancestors;
}

function getAllDescendants(node, descendants = []) {
    Array.from(node.childNodes).forEach(childNode => {
        descendants.push(childNode);
        if (childNode.childNodes.length) {
            getAllDescendants(childNode, descendants);
        }
    });
    return descendants;
}

// Example Usage
console.log('Children:', children);
console.log('Child Nodes:', childNodes);
console.log('First Child:', firstChild);
console.log('Last Child:', lastChild);
console.log('Parent:', parent);
console.log('Next Sibling:', nextSibling);
console.log('Previous Sibling:', previousSibling);
console.log('All Divs Inside Element:', allDivsInsideElement);
console.log('Specific Child:', specificChild);
console.log('Ancestors of Element:', getAllAncestors(element));
console.log('Descendants of Element:', getAllDescendants(element));
