// 1. What is the difference between map() and forEach() in JavaScript?

    // ⚖️ Compare with map() vs forEach() for building HTML:
        // forEach flow:
        // let html = ""; // string
        // forEach → append → string

        // map flow:
        // map → array → join("") → string

        // Quick idea:
        // map → “Give me a new array”
        // forEach → “Let me loop and build manually”

    // | Feature                    | `map()`        | `forEach()`          |
    // | -------------------------- | -------------- | -------------------- |
    // | Return value               | ✅ New array    | ❌ `undefined`        |
    // | Purpose                    | Transform data | Perform side effects |
    // | Chainable                  | ✅ Yes          | ❌ No                 |
    // | Immutability               | ✅ Preferred    | ❌ Often mutates      |
    // | Use in React               | ✅ Very common  | ❌ Not used           |
    // | Needs `.join()` (for HTML) | ✅ Yes          | ❌ No                 |


// 2. What is difference between map() and filter() in JavaScript?

    // “map() is used to transform data, while filter() is used to select data based on a condition.”
    // map() → modify each item
    // filter() → pick some items

    // | Feature                    | `map()`        | `filter()`           |
    // | -------------------------- | -------------- | -------------------- |
    // | Return value               | ✅ New array    | ✅ New array         |
    // | Purpose                    | Transform data | Select subset        |
    // | Chainable                  | ✅ Yes          | ✅ Yes                |
    // | Immutability               | ✅ Preferred    | ✅ Preferred          |
    // | Use in React               | ✅ Very common  | ✅ Common             |
    // | Needs `.join()` (for HTML) | ✅ Yes          | ❌ No                 |

// 3. What is the difference between map() and reduce() in JavaScript?

    // | Feature                    | `map()`        | `reduce()`           |
    // | -------------------------- | -------------- | -------------------- |
    // | Return value               | ✅ New array    | ✅ Single value       |
    // | Purpose                    | Transform data | Aggregate data        |
    // | Chainable                  | ✅ Yes          | ✅ Yes                |
    // | Immutability               | ✅ Preferred    | ✅ Preferred          |
    // | Use in React               | ✅ Very common  | ❌ Less common        |
    // | Needs `.join()` (for HTML) | ✅ Yes          | ❌ No                 |

// 4. What is reduce() in JavaScript?
    // reduce() is used to combine all elements of an array into a single value, like sum or product.
    // Quick idea:
    // reduce() = take all values → combine into one result

// 5. What is Higher-Order Function in JavaScript?
    // A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
    // Quick idea:
    // HOF = “A function that works with other functions”

    // Why HOF is important:
    // Code reuse
    // Cleaner logic
    // Functional programming style
    // Used everywhere in modern JS & React

// 6. What is Callback Function in JavaScript?
    // A callback function is a function that is passed as an argument to another function and is executed later.
    // It is passed as an argument
    // It is called inside another function
    // Quick idea:
    // Callback = “I am the function being passed”

// 8. What is Currying in JavaScript?
    // Currying is converting a function with multiple arguments into a sequence of functions that take one argument at a time.
    // it's taking one argument at a time instead of all at once.
    // Quick idea:
    // Instead of: add(a, b)
    // We do: add(a)(b)

// 9. What is Closure in JavaScript?
    // A closure is when a function remembers variables from its outer function even after the outer function has finished executing.
    // Quick idea:
    // Closure = function remembers its parent variables
    // 👉 Inner function remembers outer variables


// 10. Difference between HOF and Callback, Currying, Closure ?
    // Definition:
    // “A HOF is a function that accepts another function as input, and a callback is the function passed into it.”

    //HOF → A function that accepts another function as a argument or returns a function
    //Callback → A function that is passed as an argument to another function
    // Currying → taking one argument at a time instead of all at once.
    // Closure → function remembers its parent variables


    // 🧠 One-line Memory
    // HOF → takes function
    // Callback → passed function
    // Currying → one argument at a time
    // Closure → remembers parent variables

    // Example 1: For HOF + Callback + Currying + Closure in one example
        // HOF
        function processPrice(discountFn) {
            return function(price) {
                return discountFn(price);
            };
        }
        // It takes a function (discountFn)

        // Currying + Closure
        function createDiscount(discount) {
            return function(price) {
                return price - (price * discount);
            };
        }
        //Currying: One input at a time → discount → then price
        // Inner function remembers discount = 0.1

        const tenPercentDiscount = createDiscount(0.1);

        // Callback
        const applyDiscount = processPrice(tenPercentDiscount);
        // Callback tenPercentDiscount is passed argument
        // ProcessPrice is HOF because it takes a function as an argument

        console.log(applyDiscount(1000)); // 900

// 11. What is Synchronous vs Asynchronous in JavaScript?
    // Synchronous code runs in sequence, blocking the next operation until the current one finishes. 
    // Asynchronous code allows other operations to run while waiting for tasks to complete, using callbacks, promises, or async/await.
    // Quick idea:
    // Synchronous = “One at a time” 
            // Example:
            console.log("A");
            console.log("B");
            console.log("C");
            // Output: A B C (in order)
    // Asynchronous = “Multiple at once”
            // Example:
            console.log("A");
            setTimeout(() => console.log("B"), 1000); // Asynchronous
            console.log("C");
            // Output: A C B (B comes after 1 second, while A and C run immediately)

// 12. Promises is synchronous or asynchronous ?
    // Promise is both synchronous and asynchronous.
    // a. Creating Promise is Synchronous
    const promise = new Promise((resolve, reject) => {
        // This part runs synchronously
        console.log("Promise created");
        resolve("Done");
    });

    // b. Resolving Promise is Asynchronous
    promise.then(result => {
        console.log(result); // This runs asynchronously
    });

    //Quick idea:
    // Creating Promise → Synchronous
    // Resolving Promise → Asynchronous

// 13. Fetch API Using Promises
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(data => console.log(data))  // Full data
        .catch(err => console.error("Error:", err));

// 14. What is Async/Await in JavaScript?
    // async functions are asynchronous because they return Promises, but await makes the code inside behave like synchronous execution without blocking the main thread.

    // Quick idea:
    // Asyc -> Always returns a Promise (Asyncronous function)
        // Executes asynchronously (non-blocking)
    // Await -> Waits for a Promise to resolve (synchronous code style for async operations)
        // await pauses only inside the function
        // It does NOT block the main thread     
        
// 15. Fetch API Using Async/Await
    async function getUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    getUsers();

// 16. What is the difference between Async/Await and Promises in JavaScript?
    // | Feature                    | Async/Await     | Promises            |
    // | -------------------------- | -------------- | -------------------- |
    // | Syntax                     | Synchronous style | Chained `.then()`   |
    // | Error Handling             | `try/catch`     | `.catch()`          |
    // | Readability                | ✅ More readable  | ❌ Can be nested     |
    // | Debugging                  | ✅ Easier        | ❌ Can be harder     |
    // | Use in React               | ✅ Common         | ✅ Common            |
    // | Control Flow               | ✅ Better for complex flows  | ❌ Can be less intuitive |

// 17. Parallel vs Sequential
    // Sequential(Slow): Tasks run one after another, waiting for each to finish.
    // Parallel(Fast): Tasks run at the same time
    // Quick idea:
    // Sequential = “One after another”
    // Parallel = “At the same time”

    // Example of Sequential
    async function sequentialTasks() {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user1 = await res1.json();
        console.log("User 1:", user1);

        const res2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const user2 = await res2.json();
        console.log("User 2:", user2);
    }

    // Example of Parallel
    async function parallelTasks() {
        const [res1, res2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/users/2")
        ]);

        const user1 = await res1.json();
        const user2 = await res2.json();

        console.log("User 1:", user1);
        console.log("User 2:", user2);
    }


// 18. What is Pure Function in JavaScript?
    // A pure function is a function that always produces the same output for the same input and has no side effects (does not modify external state).
    // Quick idea:
    // Pure Function = “Same input → Same output, No side effects”

// 19. What is ES6 and its features?
    // ES6 (ECMAScript 2015) is a major update to JavaScript that introduced new features and syntax improvements.
    // Some key features include:
        // let and const for block-scoped variables
            let age100 = 25;
            const name100 = "Shafi";
        // Arrow functions for concise function syntax
            const add = (a, b) => a + b;
        // Template literals for easier string interpolation
            const msg = `Hello ${name}`;
        // Destructuring assignment for unpacking values from arrays or objects
            const user = { name: "Shafi", age: 25 };
            const { name, age } = user;
        // Default parameters for functions
            function greet(name = "Guest") {
            console.log(name);
            }
        // Rest and spread operators for handling function arguments and array manipulation
        // Spread
        const arr2 = [...arr1];
        // Rest
        function sum(...nums) {}
        // Modules (import/export)
            // export → send out
            // import → bring in
        // Promises for better asynchronous programming
            fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));

// 20. What is Memory Management in JavaScript?
    // Memory management is the process of allocating, using, and freeing memory efficiently. 
    // In JavaScript, it is handled automatically through garbage collection based on reachability.

    // Quick idea:
    // Memory management = “Allocating, using, and freeing memory efficiently”
    // JavaScript uses garbage collection to automatically free memory that is no longer reachable.

// 21. Memory Leaks in JavaScript?
    // A memory leak happens when memory is allocated but never released, even though the program no longer needs it.

    // Common causes of memory leaks:
        // Unintentional global variables
            var data = "I stay forever"; // never cleaned
        // Forgotten timers or intervals
            setInterval(() => console.log("I keep running"), 1000); // never cleaned
            // Fix: clearInterval(timerId);
        // Closures that hold onto large objects
            function createClosure() {
                const largeData = new Array(1000000).fill("data");
                return function() {
                    console.log(largeData[0]);
                };
            }
            const closure = createClosure();
        // Detached DOM nodes
            const element = document.getElementById("myElement");
            element.remove(); // element is removed from DOM but still in memory if referenced
            // Fix: set element to null
            element = null;

    // Quick idea:
    // Memory leak = “Memory that is allocated but never released”

// 22. What is the difference between Local Storage, Session Storage, and Cookies in JavaScript?
    // Local Storage: localStorage is a Web Storage API that stores data in the browser with no expiration time.
    // Session Storage: sessionStorage stores data only for a single browser tab/session.
    // Cookies: Cookies are small pieces of data stored in the browser that can have an expiration date and are sent to the server with each request.

    // Quick idea:
    // Local Storage = “Permanent storage in browser, no expiration” (Forever until cleared)
    // Session Storage = “Temporary storage, cleared on tab close” (On Tab close)
    // Cookies = “Small data, sent to server, can expire” (Server Communication with expiration)

    //     | Feature        | Local Storage    | Session Storage  | Cookies           |
    // | -------------- | ---------------- | ---------------- | ----------------- |
    // | Lifetime       | Permanent        | Until tab closes | Depends on expiry |
    // | Storage Size   | ~5–10 MB         | ~5 MB            | ~4 KB             |
    // | Sent to Server | ❌ No             | ❌ No             | ✅ Yes (auto)      |
    // | Scope          | All tabs         | Single tab       | All requests      |
    // | API            | JS (Web Storage) | JS (Web Storage) | HTTP + JS         |

// 21. Performance Optimization
    // 13.1 Reduce DOM Manipulation
    // 13.2 Debouncing and Throttling
    // 13.3 Lazy Loading
    // 13.4 Code Splitting
    // 13.5 Caching
    // 13.6 Global Variables and Memory Leaks

// 22. What is Web Workers in JavaScript?
    // 👉 Web Workers allow JavaScript to run in background threads, preventing UI blocking.
    // Quick idea:
    // Web Workers = “Run JS in background thread, keep UI responsive”

    // Why use Web Workers?
    // JavaScript is single-threaded → heavy tasks block UI
    // Web Workers run in a separate thread → keep UI responsive

    // Main thread → UI, user interactions
    // Worker thread → heavy computations, background tasks
    // Communication via postMessage and onmessage

// 23. What is Debouncing and AbortController and Throttling ?
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

    //     | Feature  | Debounce 🟢     | Throttle 🔴     | AbortController 🔵 |
    // | -------- | --------------- | --------------- | ------------------ |
    // | Purpose  | Delay execution | Limit frequency | Cancel requests    |
    // | Trigger  | After stop      | At intervals    | On new request     |
    // | Use Case | Search input    | Scroll/resize   | API handling       |

