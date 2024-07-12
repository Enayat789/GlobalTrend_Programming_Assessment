// 7. Write a function that generates the first n numbers of the Fibonacci sequence.

function generateFibonacci(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

const n = 10;
const result = generateFibonacci(n);
console.log(result);
