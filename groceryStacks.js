const groceryStack = [];

function peek() {
  return groceryStack.length === 0 ? "Stack is empty" : groceryStack[groceryStack.length - 1];
}

function push(item) {
  groceryStack.push(item);
  console.log(`Pushed: ${item}, Top: ${peek()}`);
  console.log("Current Stack:", groceryStack);
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Cannot pop: Stack is empty");
    return;
  }
  const popped = groceryStack.pop();
  console.log(`Popped: ${popped}, Top: ${peek()}`);
  console.log("Current Stack:", groceryStack);
}

for (let i = 0; i < 5; i++) {
  const item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

pop();