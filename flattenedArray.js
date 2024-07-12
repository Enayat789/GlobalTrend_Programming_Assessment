// // Write a function that takes a nested array and returns a flattened array.

function flattenedArray(arr) {
  let flattened = []; // Initialize an empty array to store flattened elements

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenedArray(arr[i]));
    } else {
      flattened.push(arr[i]); // Push non-array elements into the flattened array
    }
  }

  return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const result = flattenedArray(nestedArray);
console.log(result);
