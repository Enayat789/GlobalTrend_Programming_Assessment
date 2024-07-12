// // 4. Write a function that checks if two given strings are anagrams of each other.

function checkAnagrams(str1, str2) {
  // Check if the lengths of the strings are different
  if (str1.length !== str2.length) {
    return false; // If different, they cannot be anagrams
  }

  // Sort characters of both strings and join them
  let sortedString1 = str1.split("").sort().join("");
  let sortedString2 = str2.split("").sort().join("");

  // Compare sorted strings and return result
  return sortedString1 === sortedString2
    ? "Yes, the strings are Anagrams"
    : "Not Anagrams";
}

let string1 = "listen";
let string2 = "silent";

const result = checkAnagrams(string1, string2); // Check if string1 and string2 are anagrams
console.log(result);
