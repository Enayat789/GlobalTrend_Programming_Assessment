// // Write a function that takes a string input representing a simple arithmetic expression
// //  (only addition and subtraction) and returns the result.

function arithmeticExpression(expression) {
  const total = eval(expression); // Evaluating the arithmetic expression
  return total;
}

const result1 = arithmeticExpression("2 + 4");
const result2 = arithmeticExpression("8 - 3");

console.log(result1);
console.log(result2);
