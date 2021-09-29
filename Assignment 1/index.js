// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function performOperation(operation, ...args){
    return operation(args);
}

function add(arr){
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    return sum;
}

function multiply(arr){
    let totalVal = 1;
    for (let val of arr) {
        totalVal *= val;
    }
    return totalVal;
}

console.log("Solution 1 : ");
console.log("Performing Operation - ADD : ", performOperation(add, 10, 20, 30));
console.log("Performing Operation - MULTIPLY : ", performOperation(multiply, 10, 20, 30));

console.log("-------------------------------------------")

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string 
// that represents the first letter of both the arguments. For the arguments Roger and Waters, 
// the function returns ‘RW’. Write this function.

var initials = (firstName, lastName) => {
    return "" + firstName.charAt(0) + lastName.charAt(0); 
}

console.log("Solution 2 :");
console.log("Initials of the Roger Waters is : ", initials('Roger', 'Waters'));