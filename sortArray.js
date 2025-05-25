const numbersInput = prompt("Enter numbers separated by commas (e.g. 24,65,21,5,9,32,42,80,57):");
const namesInput = prompt("Enter names separated by commas (e.g. Zenvo,Erica,Jordie,Alicia,Redon):");

const numbers = numbersInput.split(',').map(Number);
const names = namesInput.split(',');

const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);
console.log("Numbers Sorted Descending:", [...numbers].sort((a, b) => b - a));
console.log("Names Sorted Alphabetically:", [...names].sort());