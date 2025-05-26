// Create a multi-dimensional array [name, age] using prompt()
let subArray1 = prompt().split(",").map(n => n.trim());
let subArray2 = prompt().split(",").map(n => Number(n.trim()));

// Combine the two arrays into a single array of [name, age] pairs
let restructured = [];
for (let i = 0; i < subArray1.length; i++) {
  restructured.push([subArray1[i], subArray2[i]]);
}

// Print each [name, age] pair to the console
for (let pair of restructured) {
  console.log(pair);
}
