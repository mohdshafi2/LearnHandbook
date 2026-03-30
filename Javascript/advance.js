// Advanced JavaScript Concepts
    // 1. Promises and Async/Await
    // 2. Callbacks
    // 3. Closures
    // 4. Carrying
    // 5. Prototypes and Inheritance
    // 6. Composition
    // 7. Generators
    // 8. ES6 Modules
    // 9. Error Handling
    // 10. Memory Management
    // 11. Performance Optimization
    // 12. Local Storage and Session Storage
    // 13. Web Workers

    
// 1.1 Promises
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 2000);
    });
    promise.then(result => {
        console.log(result); // Promise resolved! (after 2 seconds)
    }).catch(error => {
        console.error(error);
    });

// 1.2 Async/Await
    async function fetchData() {
        try {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();

// 2. Callbacks
    function fetchDataWithCallback(callback) {
        setTimeout(() => {
            let data = { name: "John", age: 30 };
            callback(data);
        }, 2000);
    }
    fetchDataWithCallback(function (data) {
        console.log("Data received:", data); // Data received: { name: "John", age: 30 } (after 2 seconds)
    });

// 3. Closures
    function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log("Outer Variable:", outerVariable);
            console.log("Inner Variable:", innerVariable);
        };
    }
    const newFunction = outerFunction("I am from the outer function");
    newFunction("I am from the inner function");

// 4. Carrying
    function add(a) {
        return function (b) {
            return a + b;
        };
    }
    const add5 = add(5);
    console.log(add5(3)); // 8 (5 + 3) 

// 5. Prototypes and Inheritance
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
    const person1 = new Person("Alice", 25);
    person1.greet(); // Hello, my name is Alice and I am 25 years old.

    function Student(name, age, grade) {
        Person.call(this, name, age);
        this.grade = grade;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    const student1 = new Student("Bob", 20, "A");
    student1.greet(); // Hello, my name is Bob and I am 20 years old.   


// 7. Composition
    const canEat = {
        eat: function () {
            console.log("Eating...");
        }
    };
    const canWalk = {
        walk: function () {
            console.log("Walking...");
        }
    };
    const canSwim = {
        swim: function () {
            console.log("Swimming...");
        }
    };
    function createPerson(name) {
        let person = Object.assign({}, canEat, canWalk, canSwim);
        person.name = name;
        return person;
    }
    const person2 = createPerson("Charlie");
    person2.eat(); // Eating...
    person2.walk(); // Walking...
    person2.swim(); // Swimming...  

// 8. Generators
    function* generatorFunction() {
        yield "First value";
        yield "Second value";
        yield "Third value";
    }
    const generator = generatorFunction();
    console.log(generator.next().value); // First value
    console.log(generator.next().value); // Second value
    console.log(generator.next().value); // Third value
    console.log(generator.next().value); // undefined (no more values to yield) 

// 9. ES6 Modules
    // In file math.js
    export function add(a, b) {
        return a + b;
    }
    export function subtract(a, b) {
        return a - b;
    }

    // In file main.js
    import { add, subtract } from './math.js';
    console.log(add(5, 3)); // 8
    console.log(subtract(5, 3)); // 2   

// 10. Error Handling
    try {
        let result = riskyFunction();
        console.log(result);
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        console.log("This will always execute.");
    }

// 11. Memory Management
    // JavaScript uses automatic garbage collection to manage memory. It identifies and frees up memory that is no longer in use, preventing memory leaks and optimizing performance. Developers should be mindful of creating unnecessary references to objects, as this can prevent garbage collection and lead to memory issues. 

// 12. Performance Optimization
    // 12.1 Minimize DOM access by caching references to elements.
    // 12.2 Use event delegation to handle events efficiently.
    // 12.3 Avoid using innerHTML when possible to prevent security risks.
    // 12.4 Use document fragments for batch updates to improve performance.
    // 12.5 Keep JavaScript separate from HTML for better maintainability.

// 13. Local Storage and Session Storage
    // Local Storage
    localStorage.setItem("username", "JohnDoe");
    let username = localStorage.getItem("username");
    console.log(username); // JohnDoe
    localStorage.removeItem("username");
    localStorage.clear();

    // Session Storage
    sessionStorage.setItem("sessionId", "abc123");
    let sessionId = sessionStorage.getItem("sessionId");
    console.log(sessionId); // abc123
    sessionStorage.removeItem("sessionId");
    sessionStorage.clear();

// 14. Web Workers
    // In file worker.js
    self.addEventListener("message", function (e) {
        let result = e.data * 2; // Example of a time-consuming task
        self.postMessage(result);
    });

    // In main.js
    let worker = new Worker("worker.js");
    worker.postMessage(10); // Send data to the worker
    worker.addEventListener("message", function (e) {
        console.log("Result from worker:", e.data); // Result from worker: 20
    });


