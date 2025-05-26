// Initialize an empty array to act as the grocery stack
const groceryStack = [];

// Returns the top item of the stack without removing it
function peek() {
  return groceryStack.length === 0 ? "Stack is empty" : groceryStack[groceryStack.length - 1];
}

// Adds an item to the top of the stack and logs the status
function push(item) {
  groceryStack.push(item);
  console.log(`Pushed: ${item}, Top: ${peek()}`);
  console.log("Current Stack:", groceryStack);
}

// Removes the top item from the stack and logs the status
function pop() {
  if (groceryStack.length === 0) {
    console.log("Cannot pop: Stack is empty");
    return;
  }
  const popped = groceryStack.pop();
  console.log(`Popped: ${popped}, Top: ${peek()}`);
  console.log("Current Stack:", groceryStack);
}

// Get 5 grocery items from the user and push them onto the stack
for (let i = 0; i < 5; i++) {
  const item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

// Remove the top item from the stack
pop();
