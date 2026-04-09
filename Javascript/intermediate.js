// Learn javascript intermediate. 
    // 1. Logical operators
    // 2. Loops (for, while, for...of, for...in, forEach)
    // 3. Map
    // 4. Filter
    // 5. Reduce
    // 6. Higher-Order Functions
    // 7. Callback Functions            


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


// 3. Map 
    // map() is used to transform data by applying a function to each element in an array and returning a new array with the transformed values.
    // map → “Give me a new array”
    // map() → modify each item
    array.map((element, index, array) => {
        return newValue;
    });
    //element → current item
    //index → position (optional)
    //array → original array (optional)

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

// 4. Filter 
    // filter() is used to select data based on a condition.
    // filter -- > pick some items
    array.filter((element, index, array) => {
        return condition; // true to keep, false to discard
    });

    //element → current item
    //index → position (optional)
    //array → original array (optional)
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [2, 4]

    // Example of filter with objects
    let adults = people.filter(person => person.age >= 30);
    console.log(adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]   
    
// 5. Reduce 
    // reduce() is used to combine all elements of an array into a single value, like sum or product.
    // Quick idea:
    // reduce() = take all values → combine into one result

    array.reduce((accumulator, currentValue, index, array) => {
        return newAccumulator;
    }, initialValue);
    //accumulator → accumulates the result (starts with initialValue)
    //currentValue → current item
    //index → position (optional)
    //array → original array (optional)


    // Example of reduce to calculate the sum of an array
    const numb1 = [1, 2, 3, 4];
    const sum = numb1.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 10

    //Explanation (very simple)
    // acc → keeps total
    // curr → current number
    // 0 → starting value

    //Step flow:
    // 0 + 1 = 1  
    // 1 + 2 = 3  
    // 3 + 3 = 6  
    // 6 + 4 = 10

    // Eample 2:
    const red1 = numbers.reduce((acc, curr) => acc * curr, 1);
    console.log(red1); // 24 (1 * 2 * 3 * 4)


    // Example 3 of reduce with objects to calculate total age
    let totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
    console.log(totalAge); // 90 (25 + 30 + 35)
    

// 6. Higher-Order Functions
    // 1.HOF is a function that accepts another function as an argument 
    // 2. returns another function as a result.
    // Quick idea:
    // HOF → “I receive a function or return a function”


    // 6.1 Function that takes another function as an argument
    function performOperation(a, b, operation) {
        return operation(a, b);
    }
    console.log(performOperation(5, 3, add)); // 8 (using the add function defined earlier)

    // 6.2 Function that returns another function
    function greetUser(greeting) {
        return function(name) {
            return `${greeting}, ${name}`;
        };
    }
    // 1. Call outer function
    const sayHello = greetUser("Hello");
    // 2. Call returned function
    console.log(sayHello("Shafi")); // Hello, Shafi

    // 6.3 Discount example using HOF
    function createDiscount(discount) {
        return function(price) {
            return price - (price * discount);
        };
    }

    const finalPrice = createDiscount(0.25);
    console.log(finalPrice(4588)); // 3441

    // Real World Example of HOF: 
    // Map, filter, and reduce are all higher-order functions because they take a function as an argument to perform operations on array elements.
    // Map example:
    [1, 2, 3].map(n => n * 2); // [2, 4, 6]
    // Filter example:
    [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
    // Reduce example:
    [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

// 7. Callback Functions
    // A callback function is a function that is passed as an argument to another function and is executed later.
    // It is passed as an argument
    // It is called inside another function
    // Quick idea:
    // Callback → “I am the function being passed”

    const add = (a, b) => a + b;
    performOperation(5, 3, add);

// 8. Difference between HOF and Callback
    // HOF
    // performOperation is a HOF because it accepts another function (operation) as an argument.
    function performOperation(a, b, operation) {
        return operation(a, b);
    }

    // Callback
    // add is the callback function being passed to performOperation
    const add1 = (a, b) => a + b;
    performOperation(5, 3, add1); 
