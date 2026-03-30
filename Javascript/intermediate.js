// Learn javascript intermediate. 
    // 1. Logical operators
    // 2. Loops (for, while, for...of, for...in, forEach)
    // 3. Map, filter, reduce
    // 4. Higher-Order Functions
            


// 1. Logical operators
    // 1.1 && (AND) operator
    let isAdult = (age2 >= 18) && (age2 < 65);
    console.log(isAdult); // true

    // 1.2 || (OR) operator
    let isWeekend = (day === 6) || (day === 7);
    console.log(isWeekend); // false

    // 1.3 ! (NOT) operator
    let isNotStudent = !isStudent;
    console.log(isNotStudent); // false

    // 1.4 Combining logical operators
    let canVote = (age2 >= 18) && (age2 < 65) && !isStudent;
    console.log(canVote); // false

    // 1.5 Short-circuit evaluation
    let result = (age2 >= 18) && (age2 < 65) && !isStudent ? "Can vote" : "Cannot vote";
    console.log(result); // Cannot vote

    // 1.6 Logical operators with non-boolean values
    let value1 = 0 || "Default"; // 0 is falsy, so it returns "Default"
    let value2 = "" && "Will not return"; // "" is falsy, so it returns ""
    console.log(value1); // Default
    console.log(value2); // (empty string)

    // 1.7 Logical operators with functions
    function isEvenNumber(num) {
        return num % 2 === 0;
    }
    let number = 4;
    let checkEven = isEvenNumber(number) && "Number is even";
    console.log(checkEven); // Number is even

    // 1.8 0 == false
    console.log(0 == false); // true
    console.log(0 === false); // false (strict equality checks type as well)    

    // 1.9 1 == true
    console.log(1 == true); // true
    console.log(1 === true); // false (strict equality checks type as well)

    // 1.10 null == undefined
    console.log(null == undefined); // true
    console.log(null === undefined); // false (strict equality checks type as well)

    // 1.11 % (modulus) operator
    let remainder = 10 % 3;
    console.log(remainder); // 1 (10 divided by 3 leaves a remainder of 1)
    
     // Example modulus 
    let number2 = 15;
    if (number2 % 2 === 0) {
        console.log(`${number2} is even.`);
    } else {
        console.log(`${number2} is odd.`);
    } // 15 is odd.


// 2. Loops
    // 2.1 For loop
    for (let i = 0; i < 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }

    // 2.2 While loop
    let count = 0;
    while (count < 5) {
        console.log(count); // 0, 1, 2, 3, 4
        count++;
    }

    // 2.3 For...of loop (for arrays)
    for (let hobby of hobbies) {
        console.log(hobby); // reading, gaming, coding
    }

    // 2.4 For...in loop (for objects)
    for (let key in person) {
        console.log(`${key}: ${person[key]}`); // name: John, age: 30
    }

    // 2.5 forEach loop (for arrays)
    hobbies.forEach((hobby, index) => {
        console.log(`${index}: ${hobby}`); // 0: reading, 1: gaming, 2: coding
    });

    // 2.6 ForEach loop with objects
    Object.keys(person).forEach(key => {
        console.log(`${key}: ${person[key]}`); // name: John, age: 30
    });

// 3. Map, filter, reduce

// 3.1 Map with arrays
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

    // Example of map with objects
    let people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];
    let names = people.map(person => person.name);
    console.log(names); // ["Alice", "Bob", "Charlie"]

// 3.2 Filter even numbers from the array
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

    // Example of filter with objects
    let adults = people.filter(person => person.age >= 30);
    console.log(adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]   
    
// 3.3 Reduce to sum all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

    // Example of reduce with objects to calculate total age
    let totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
    console.log(totalAge); // 90 (25 + 30 + 35)
    

// 4. Higher-Order Functions
    // 4.1 Function that takes another function as an argument
    function performOperation(a, b, operation) {
        return operation(a, b);
    }
    console.log(performOperation(5, 3, add)); // 8 (using the add function defined earlier)

    // 4.2 Function that returns another function
    function createMultiplier(multiplier) {
        return function (num) {
            return num * multiplier;
        };
    }
    const double = createMultiplier(2);
    console.log(double(5)); // 10 (5 multiplied by 2)

    // 4.3 Using higher-order functions with arrays
    let numbers2 = [1, 2, 3, 4, 5];
    let doubledNumbers = numbers2.map(num => num * 2);
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]

        // Example of using filter with a higher-order function
        let isEvenNumber = num => num % 2 === 0;
        let evenNumbers2 = numbers2.filter(isEvenNumber);
        console.log(evenNumbers2); // [2, 4]

        // Example of using reduce with a higher-order function
        let sumNumbers = (accumulator, currentValue) => accumulator + currentValue;
        let totalSum = numbers2.reduce(sumNumbers, 0);
        console.log(totalSum); // 15

    // 4.4 Using higher-order functions with objects
    let people2 = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];
    let names2 = people2.map(person => person.name);
    console.log(names2); // ["Alice", "Bob", "Charlie"]

        // Example of using filter with a higher-order function on objects
        let adults2 = people2.filter(person => person.age >= 30);
        console.log(adults2); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

        // Example of using reduce with a higher-order function on objects to calculate total age
        let totalAge2 = people2.reduce((accumulator, person) => accumulator + person.age, 0);
        console.log(totalAge2); // 90 (25 + 30 + 35)

