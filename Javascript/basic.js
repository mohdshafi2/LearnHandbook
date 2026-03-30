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

// 1. Variables and Data Types
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
    // Simple function with parameters and arguments
    function addNumbers(a, b) {
        return a + b;
    }
    console.log(addNumbers(10, 20)); // 30 

    // Example 2 
    function introduce(name, age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    console.log(introduce("Charlie", 28)); // My name is Charlie and I am 28 years old.
    

// 7. Spread Operator
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combinedArr = [...arr1, ...arr2];
    console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

    let person2 = { name: "Alice", age: 25 };
    let updatedPerson = { ...person2, age: 30 };
    console.log(updatedPerson); // { name: "Alice", age: 30 }

// 8. Rest Parameters
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3)); // 6

    function createPerson(name, age, ...hobbies) {
        return {
            name,
            age,
            hobbies
        };
    }
    let person3 = createPerson("Bob", 30, "gaming", "coding");
    console.log(person3); // { name: "Bob", age: 30, hobbies: ["gaming", "coding"] }

// 9. Hosting
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
    fruits.splice(1, 1);
    console.log(fruits); // ["apple", "cherry"]
    let citrus = fruits.slice(0, 1);
    console.log(citrus); // ["apple"]
    let allFruits = fruits.concat(citrus);
    console.log(allFruits); // ["apple", "cherry", "apple"]
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
    
