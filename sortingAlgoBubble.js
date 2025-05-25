const numbersBubble = [];
for (let i = 0; i < 10; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}:`), 10);
  numbersBubble.push(num);
}

function bubbleSort(arr) {
  const a = [...arr];
  let n = a.length;
  console.log("Bubble sort process:");
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing: ${a[j]} and ${a[j + 1]}`);
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

const sortedBubble = bubbleSort(numbersBubble);
console.log("Sorted Array:", sortedBubble);