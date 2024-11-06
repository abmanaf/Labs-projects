//First set of questions

//A. capitalize(str) Capitalizes the first letter of a string.
function capitalizeTheFirstLeter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const myName = "aliu abdul manaf";
const capitalizedString = capitalizeTheFirstLeter(myName);
console.log(capitalizedString);

//B. reverse(str) Reverses a string.
function reversedFriendName(str) {
  return str.split("").reverse().join("");
}
const myBestFriendName = "Faisal Abdul Hamid";
const reversedName = reversedFriendName(myBestFriendName);
console.log(reversedName);

//C. isPalindrome(str) Checks if a string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = str.split("").reverse().join("");

  return cleanedStr === reversedStr;
}
const wordToCheck = isPalindrome("madam");
console.log(wordToCheck);

//D. wordCount(str) Counts the number of words in a string.
function wordCount(str) {
  return str.length;
}
const myString = "I am a software developer at Amalitech";
const stringLength = wordCount(myString);
console.log(stringLength);
