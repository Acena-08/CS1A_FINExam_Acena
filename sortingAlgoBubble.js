// Create an empty array to store numbers entered by the user
const numbersBubble = [];

// Prompt the user to enter 10 numbers, parse and add them to the array
for (let i = 0; i < 10; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}:`), 10);
  numbersBubble.push(num);
}

// Function to perform bubble sort on an array (returns sorted copy)
function bubbleSort(arr) {
  const a = [...arr]; // Copy the original array to avoid mutation
  let n = a.length;
  console.log("Bubble sort process:");
  
  // Outer loop - number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop - compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing: ${a[j]} and ${a[j + 1]}`);
      
      // Swap if elements are in wrong order
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a; // Return the sorted array
}

// Call bubbleSort on the input array and store the result
const sortedBubble = bubbleSort(numbersBubble);

// Log the sorted array
console.log("Sorted Array:", sortedBubble);
