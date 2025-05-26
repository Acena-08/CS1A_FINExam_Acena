// Ask the user to enter the first string
const str1 = prompt("Enter first string (e.g. RACECAR):");

// Ask the user to enter the second string
const str2 = prompt("Enter second string (e.g. RECORDER):");

// Function to check if a string is a palindrome
function checkPalindrome(str) {
  const reversed = str.split('').reverse().join(''); // Reverse the string
  console.log(`Original: ${str}, Reversed: ${reversed}`); // Show original and reversed
  console.log(`Is palindrome: ${str === reversed}`); // Compare and log result
}
