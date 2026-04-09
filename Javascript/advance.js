// Advanced JavaScript Concepts
    // 1. Carrying
    // 2. Closures
    // 3. Promises
    // 4. Async/Await
    // 5. Debouncing and AbortController and Throttling
    // 6. Event Loop and Microtasks vs Macrotasks
    // 7. Pure Functions
    // 8. Local vs Session vs Cookies for Storage
    // 9. Performance Optimization
    // 10. Web Workers
    // 11. Memory Management
    // 12. Prototypes and Inheritance
    // 13. Composition
    // 14. Generators

    
// 1. Carrying vs normal functions
    // Carrying Step-by-step input → one argument per function
    // Currying means taking one argument at a time instead of all at once.
    // Currying is converting a function with multiple arguments into a sequence of functions that take one argument at a time.

    // Normal function
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // 8
    
    // Carrying function
    function add(a) {
        return function (b) {
            return a + b;
        };
    }
    console.log(add(9)(8)); // 17

    // Quick idea:
    // Instead of: add(a, b)
    // We do: add(a)(b)

    //why carrying?
    // 1. Resuability
    const add10 = add(10);
    add10(5);  // 15
    add10(20); // 30

    // Arrow function version of currying
    const add = a => b => c => a + b + c;
    add(1)(2)(3); // 6

// 2. Closures
    // A closure is when a function remembers variables from its outer function even after the outer function has finished executing.
    // Quick idea:
    // Closure = function remembers its parent variables
    // 👉 Inner function remembers outer variables
    function add(a) {
        return function(b) {
            return a + b;
        };
    }
    // 👉 Here:
    // b is current input
    // a is remembered → closure
    add(5)(10); // 15
    // so inner function remembers the value of a even after the outer function has finished executing.
    
    // Another example of closure
    function createCounter() {
        let count = 0; // This variable is enclosed in the closure
        return function() {
            count++; // The inner function has access to the outer variable 'count'
            return count;
        };
    }
    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3

// 3. Promises
    // A Promise is an object that represents the eventual success or failure of an asynchronous operation.
    // 3 States of a Promise
    // Pending   → initial state
    // Resolved  → success (.then)
    // Rejected  → failure (.catch)

    // Step 1: Create Promise
    const fetchPromise = new Promise((resolve, reject) => {
        // Simulate async work (like API call)
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("✅ Data fetched successfully");
            } else {
                reject("❌ Error occurred");
            }
        }, 2000);
    });

    // Step 2: Consume Promise
    fetchPromise.then(result => {
        console.log(result); // ✅ Data fetched successfully (after 2 seconds)
    }).catch(error => {
        console.error(error); // ❌ Error occurred (if any)
    });

    // Example of Promise with fetch API
    fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(data => console.log(data))  // Full data
            .catch(err => console.error("Error:", err));

// 4. Async/Await

    // Quick idea:
    // Asyc -> Always returns a Promise (Asyncronous function)
        // Executes asynchronously (non-blocking)
    // Await -> Waits for a Promise to resolve (synchronous code style for async operations)
        // await pauses only inside the function
        // It does NOT block the main thread       
    
    // Example of Async/Await
    async function fetchData() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users/");
            let data = await response.json();

            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();

// 5. Debouncing and AbortController and Throttling
    // 5.1 Debouncing delays execution until the user stops triggering the event for a specific time.
    // Quick idea:
    // User typing -> a → ab → abc → abcd
    // Only ONE API call after user stops typing

    // 5.2 AbortController is used to cancel ongoing API requests to avoid outdated results.
    // Quick idea:
    // User types "abc" → API call 1 (for "a") → API call 2 (for "ab") → API call 3 (for "abc")
    // Old API calls are cancelled
    // Only latest result is used

    // 5.3 Throttling ensures a function runs at most once in a fixed time interval.
    // Quick idea:
    // User scrolls → scroll event fires rapidly
    // Throttle → function executes at most once every 200ms
    // Executes every 1 second only



// 5. Pure Functions
    function pureAdd(a, b) {
        return a + b;
    }
    console.log(pureAdd(5, 3)); // 8

// 6. Prototypes and Inheritance
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
    // Composition is a way to create objects by combining reusable functions instead of inheriting from classes.
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
    // A Generator is a special function that can pause and resume execution using the yield keyword.
    // Quick idea:
    // Normal function → runs completely
    // Generator → runs step by step

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

// 12. Local Storage vs Session Storage vs Cookies Storage
    // 12.1 Local Storage: localStorage is a Web Storage API that stores data in the browser with no expiration time.
    // Not sent to server

    // Store
    localStorage.setItem("username", "JohnDoe");
    // Get
    let username = localStorage.getItem("username");
    console.log(username); // JohnDoe
    // Remove
    localStorage.removeItem("username");
    // Clear all
    localStorage.clear();

    // 12.2 Session Storage: sessionStorage stores data only for a single browser tab/session.
    // Not sent to server

    sessionStorage.setItem("sessionId", "abc123");
    let sessionId = sessionStorage.getItem("sessionId");
    console.log(sessionId); // abc123
    sessionStorage.removeItem("sessionId");
    sessionStorage.clear();

    // 12.3 Cookies Storage: Cookies are small pieces of data stored in the browser and sent to the server with every HTTP request.
    // Sent to server
    // Use Cases: Authentication, User Preferences, Tracking

    // Set cookie
    document.cookie = "username=Shafi; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";

    // Read cookie
    console.log(document.cookie);

    // Delete cookie
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";


// 14. Web Workers
    // Web Workers allow JavaScript to run in a background thread, separate from the main UI thread.
    // Quick idea:
    // Heavy loop → moved to background thread
    // Main thread → handles UI
    // Communication → postMessage

    // Why use Web Workers?
    // JavaScript is single-threaded → heavy tasks block UI


    // In file worker.js
    self.onmessage = function(e) {
        let result = e.data * 2; // heavy task
        self.postMessage(result);
    };

    // In main.js
    const worker = new Worker("worker.js");

    // Send data
    worker.postMessage(10);

    // Receive data
    worker.onmessage = function(e) {
    console.log("Result:", e.data);
    };
