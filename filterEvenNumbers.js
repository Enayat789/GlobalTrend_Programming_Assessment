// 9. Write a function that filters out even numbers from an array.

function filterOutEvenNumbers(arr) {
  return arr.filter((Number) => Number % 2 !== 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterOutEvenNumbers(array);
console.log(result);
