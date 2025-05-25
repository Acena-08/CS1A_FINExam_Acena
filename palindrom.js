const str1 = prompt("Enter first string (e.g. RACECAR):");
const str2 = prompt("Enter second string (e.g. RECORDER):");

function checkPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  console.log(`Original: ${str}, Reversed: ${reversed}`);
  console.log(`Is palindrome: ${str === reversed}`);
}