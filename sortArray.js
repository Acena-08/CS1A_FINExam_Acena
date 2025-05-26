// Get numbers and names arrays from user input
let numbers = prompt().split(",").map(n => Number(n.trim()));
let names = prompt().split(",").map(n => n.trim());

// Merge numbers and names into one array and log it
let merged = numbers.concat(names);
console.log(merged);

// Sort numbers in descending order and log them
numbers.sort((a, b) => b - a);
console.log(numbers);

// Sort names alphabetically and log them
names.sort();
console.log(names);
