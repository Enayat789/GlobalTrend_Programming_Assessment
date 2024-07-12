// // Write a function that takes an array and returns a new array with duplicates removed.

function removeArrayDuplicate(arr) {
  const newArray = []; // Initialize an empty array to store unique elements

  for (let i of arr) {
    if (newArray.indexOf(i) === -1) { 
      newArray.push(i); 
    }
  }

  return newArray; // Return the array with duplicates removed
}

const array = [1, 2, 1, 3, 4, 3, 2, 4]; 
const result = removeArrayDuplicate(array); // Call the function to remove duplicates
console.log(result); 
