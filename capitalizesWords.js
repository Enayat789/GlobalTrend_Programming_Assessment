// 6. Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalizeStringWords(str) {
  return str
    .split(" ") // Spliting the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
}

const string = "function that converts a given string to title case";
const result = capitalizeStringWords(string);
console.log(result); 