// Introduction to DOM
    // 1. What is DOM?
    // 2. Accessing DOM Elements
    // 3. Manipulating DOM Elements
    // 4. Event Handling
    // 5. Creating and Removing Elements
    // 6. Traversing the DOM
    // 7. Best Practices for DOM Manipulation

// 1. What is DOM?
    // The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of web pages dynamically using JavaScript.

// 2. Accessing DOM Elements
    // You can access DOM elements using various methods such as getElementById, getElementsByClassName, querySelector, etc.
    let elementById = document.getElementById("myElement");
    let elementsByClassName = document.getElementsByClassName("myClass");
    let elementByQuerySelector = document.querySelector(".myClass");
    let elementsByQuerySelectorAll = document.querySelectorAll(".myClass");
    let elementByTagName = document.getElementsByTagName("div");
    let elementByName = document.getElementsByName("myName");

// 3. Manipulating DOM Elements
    // You can change the content, attributes, and styles of DOM elements.
    elementById.textContent = "Hello, World!";
    elementById.setAttribute("data-info", "Some information");
    elementById.style.color = "red";
    elementById.classList.add("newClass");
    elementById.classList.remove("oldClass");
    elementById.innerHTML = "<p>New HTML content</p>";
    elementById.innerText = "New text content";
    elementById.appendChild(document.createElement("span")).textContent = "Appended text";
    elementById.removeChild(elementById.querySelector("span"));

    // Example of manipulating multiple elements
    elementsByClassName.forEach(element => {
        element.style.backgroundColor = "yellow";
    });

// 4. Event Handling
    // You can add event listeners to DOM elements to respond to user interactions.
    elementById.addEventListener("click", function () {
        alert("Element clicked!");
    });
    elementById.addEventListener("mouseover", function () {
        this.style.backgroundColor = "lightblue";
    });
    elementById.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    });
    // Render once the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        console.log("DOM fully loaded and parsed");
        elementById.textContent = "DOM is ready!";
    });
    // Form Events
    useSearch.addEventListener("input", () => {});
    form.addEventListener("submit", () => {});
    input.addEventListener("change", () => {});
    // Window Events
    window.addEventListener("load", () => {});
    window.addEventListener("resize", () => {});     
    // Keyboard Events
    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });   
    // keydown
    // keyup
    // keypress

    //Quick ideal
    // load → full page loaded (including images)
    // DOMContentLoaded → DOM ready
    // resize → window resized
    // scroll → window scrolled


// 5. Creating and Removing Elements
    let newElement = document.createElement("div");
    newElement.textContent = "I am a new element";
    document.body.appendChild(newElement);
    document.body.removeChild(newElement);

// 6. Traversing the DOM
    let parentElement = elementById.parentNode;
    let childElements = elementById.childNodes;
    let firstChild = elementById.firstChild;
    let lastChild = elementById.lastChild;
    let nextSibling = elementById.nextSibling;
    let previousSibling = elementById.previousSibling;

// 7. Best Practices for DOM Manipulation
    // 7.1 Minimize DOM access by caching references to elements.
    // 7.2 Use event delegation to handle events efficiently.
    // 7.3 Avoid using innerHTML when possible to prevent security risks.
    // 7.4 Use document fragments for batch updates to improve performance.
    // 7.5 Keep JavaScript separate from HTML for better maintainability.
