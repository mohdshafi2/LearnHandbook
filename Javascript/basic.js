// Learn javascript basic
    // 1. Variables
    // 2. Data Types
    // 3. Functions
    // 4. Arrow Functions
    // 5. Control Structures (if-else, switch, ternary operator)
    // 6. Parameters and Arguments
    // 7. Spread Operator
    // 8. Rest Parameters
    // 9. Hosting
    // 10. Arrays
    // 11. Objects
    // 12. Operators
    // 13. Keyword 'this'
    // 14. Join() and Split()

// 1. Variables and Data Types
    // Description: variables using var, let, and const
    // var is global variable that is hoisted and can be re-assigned & updated
    // let is block-scoped variable that can be updated re-assigned but not redeclared
    // const is block-scoped variable that cannot be updated or redeclared or re-assigned

let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let person = { name: "John", age: 30 }; // Object


// 2. Data Types
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof hobbies); // object (arrays are objects in JavaScript)
console.log(typeof person); // object

// 3. Functions
    // Difference between function and  Arrow function 
    
    // Function: Traditional function with its own this
    // Arrow: Short function without its own this

    // Function: Hoisted
    // Arrow: Not hoisted (treated like variable)

    // Function arrugments: Can be accessed using arguments object
    // Arrow: Does not have arguments object

    // Function: Can be used as constructor
    // Arrow: Cannot be used as constructor

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// 4. Arrow Functions
    // 4.1 Arrow function with a single parameter and a single expression
    const greet2 = (lastName) => {
        return (
            `Hello, ${lastName}!`
        )
    };
    console.log(greet2("Bob")); // Hello, Bob!

    // 4.2 Arrow function single line
    const add = (a, b) => a + b;
    console.log(add(5, 3)); // 8

    

// 5. Control Structures
    // 5.1 If-else statement
    let score = 85;
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }

    // 5.2 If statement age voting eligibility
    let age2 = 20;
    if (age2 >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }

    // 5.3 Switch statement
    let day = 3;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }   


    // 5.4 Ternary operator
    let isEven = (age2 % 2 === 0) ? "Even" : "Odd";
    console.log(isEven); // Even

    // Example of nested ternary operator
    let grade = (score >= 90) ? "A" :
                (score >= 80) ? "B" :
                (score >= 70) ? "C" : "F";
    console.log(`Grade: ${grade}`); // Grade: B

// 6. Parameters and Arguments
    // Parameters: Variables defined in the function declaration
    // Arguments: Actual values passed to the function when it is called

    // Quick Memory:
    // Parameter → placeholder
    // Argument → real value

    // Simple function with parameters and arguments
    function addNumbers(a, b) { // a, b → parameters
        return a + b;
    }
    console.log(addNumbers(10, 20)); // 30 , // 10, 20 → arguments

    // Example 2 
    function introduce(name, age) { // name, age → parameters
        return `My name is ${name} and I am ${age} years old.`;
    }
    console.log(introduce("Charlie", 28)); // My name is Charlie and I am 28 years old.
    

// 7. Spread Operator
    // One-line: Spread expands array/object into individual values
    // Quick Memory: Spread = Expand, Copy of array or object then merge it.

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combinedArr = [...arr1, ...arr2];
    console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

    let person2 = { name: "Alice", age: 25 };
    let updatedPerson = { ...person2, age: 30 };
    console.log(updatedPerson); // { name: "Alice", age: 30 }

// 8. Rest Parameters
    // One-line: Collects multiple arguments into a single array
    // Quick Memory: Rest = Collect, Gather values into an array.
    //👉 Rest = take many values → convert into array

    // Example 1:
    function sum(...numbers) { // ...numbers → rest parameter
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3)); // 6

    // Example 2:
    function greet(first, ...others) {
        console.log(first);
        console.log(others);
    }

    greet("Hi", "Hello", "Hey");
    // first → "Hi"
    // others → ["Hello", "Hey"]

    // Example 3:
    function test(...nums) {
    console.log(nums);
    }

    test(1, 2, 3, 4); 
    // nums = [1, 2, 3, 4]

    // conclusion:
    //Spread → expand
    //Rest → collect

// 9. Hosting
    // Hoisting is JavaScript’s default behavior where variable and function declarations are moved to the top of their scope before execution.
    // Hoisting = declarations move to top (not values)

    console.log(greet3("Dave")); // Hello, Dave!
    function greet3(name) {
        return `Hello, ${name}!`;
    }
    // Example of hosting with variables
    console.log(myVar); // undefined
    var myVar = "I am a variable";
    console.log(myVar); // I am a variable

    // Example of hosting with let and const
    // console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = "I am a let variable";
    console.log(myLet); // I am a let variable

    // console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = "I am a const variable";
    console.log(myConst); // I am a const variable

// 10. Arrays
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits[0]); // apple
    console.log(fruits.length); // 3
    fruits.push("date");
    console.log(fruits); // ["apple", "banana", "cherry", "date"]
    fruits.pop();
    console.log(fruits); // ["apple", "banana", "cherry"]
    fruits.unshift("avocado");
    console.log(fruits); // ["avocado", "apple", "banana", "cherry"]
    fruits.shift();
    console.log(fruits); // ["apple", "banana", "cherry"]

    // a. Splice array.splice(start, deleteCount, newItems...)
    let alp = ["a", "b", "c", "d"];
    // Start at index 1
    // Delete 2 elements → "b", "c"
    alp.splice(1, 2); // ["b", "c"] (deleted elements)
    console.log(alp); // ["a", "d"]
    let alp1 = ["a", "b", "c", "d"];
    // Start at index 1
    // Delete 2 → "b", "c"
    // Insert "x", "y"
    alp1.splice(1, 2, "x", "y"); // ["b", "c"] (deleted elements), "x", "y" (new elements)
    console.log(alp1); // ["a", "x", "y", "d"]

    // b. Slice array.slice(start, end)
    let numbers = [1, 2, 3, 4, 5];
    let slicedNumbers = numbers.slice(1, 4);
    console.log(slicedNumbers); // [2, 3, 4] (end index is exclusive)
    let slicedNumbers2 = numbers.slice(2);
    console.log(slicedNumbers2); // [3, 4, 5] (slices from index 2 to the end)
    
    let ap2 = ["a", "b", "c", "d"];
    ap2.slice(-2); // ["c", "d"] (slices start from the last 2 elements)
    ap2.slice(-1); // ["d"]
    ap2.slice(-3); // ["b","c","d"]

    // Quick Memory:
    // splice() → modify
    // slice() → copy
    // Concat() → merge arrays

    // c. Concat, indexOf, includes

    let con1 = ["a", "b"];
    let con2 = ["c", "d"];
    let result11 = con1.concat(con2);
    console.log(result11); // ["a","b","c","d"]

    //example 2:
    let result = con1.concat("c", "d");
    console.log(result); // ["a","b","c","d"]

    // Quick Memory: Difference between concat and spread operator
    // concat() → method to combine arrays
    // spread (...) → syntax to expand values

    //concat() → only works with arrays
    //spread → works with arrays, objects, function args
   

    let index = fruits.indexOf("cherry");
    console.log(index); // 1
    let hasBanana = fruits.includes("banana");
    console.log(hasBanana); // false    


    
// 11. Objects  
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        getCarInfo: function () {
            return `${this.make} ${this.model} (${this.year})`;
        }
    };
    console.log(car.getCarInfo()); // Toyota Camry (2020)

    // Example of object destructuring
    let { make, model } = car;
    console.log(make); // Toyota
    console.log(model); // Camry

    // Example of object methods
    car.start = function () {
        console.log("Car started");
    };
    car.start(); // Car started 
    car.stop = function () {
        console.log("Car stopped");
    };
    car.stop(); // Car stopped

    // Example of nested objects
    let person4 = {
        name: "Alice",
        age: 25,
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA"
        }
    };
    console.log(person4.address.city); // Anytown   


// 12. Operators
    let a = 10;
    let b = 5;
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2
    console.log(a % b); // 0
    a++;
    console.log(a); // 11
    b--;
    console.log(b); // 4
    console.log(a > b); // true
    console.log(a < b); // false
    console.log(a >= b); // true
    console.log(a <= b); // false
    console.log(a === b); // false
    console.log(a !== b); // true   

    5 === "5"; // false (strict equality checks type as well)
    5 == "5"; // true (loose equality converts types before comparison) 

    undefined == null; // true
    undefined === null; // false (strict equality checks type as well)

    // 13. Keyword 'this'
    let person5 = {
        name: "Bob",
        greet: function () {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person5.greet(); // Hello, my name is Bob

    // Example of 'this' in a function
    function showThis() {
        console.log(this);
    }
    showThis(); // In non-strict mode, this will log the global object (window in browsers). In strict mode, it will log undefined.

    // Example of 'this' in an arrow function
    const arrowFunction = () => {
        console.log(this);
    };
    arrowFunction(); // Arrow functions do not have their own 'this', so it will log the 'this' value of the enclosing context.
    
// 13. Join and Split
    // One-line: Convert array into string using join()
    // One-line: Convert string into array using split()

    //Quick memory:
    //join() → array ➝ string
    //split() → string ➝ array

    // Example of join()
    const arr = ["a", "b", "c"];
    const str = arr.join();

    console.log(str); // "a,b,c"

    // Example of split()
    const str1 = "a,b,c";
    const arr4 = str.split(",");

    console.log(arr4); // ["a","b","c"]

    // Example of split() with empty string
    const str2 = "hello";
    const arr5 = str2.split("");

    console.log(arr5); // ["h","e","l","l","o"]
