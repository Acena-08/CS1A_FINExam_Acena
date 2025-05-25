const subArray1Input = prompt("Enter names separated by commas (e.g. Genevieve,Juan,Luna,Gabriel,Elise):");
const subArray2Input = prompt("Enter ages separated by commas (e.g. 24,65,21,5,9):");

const subArray1 = subArray1Input.split(',');
const subArray2 = subArray2Input.split(',').map(Number);

const restructured = subArray1.map((name, index) => [name, subArray2[index]]);
console.log("Restructured Array:");
restructured.forEach(pair => console.log(pair));