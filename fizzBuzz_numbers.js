// // Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz"
// // instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both
// // three and five, print "FizzBuzz".

function printFizzBuzz(arrayLength) {
  const forFizz = []; // Array to store numbers divisible by 3
  const forBuzz = []; // Array to store numbers divisible by 5
  const forFizzBuzz = []; // Array to store numbers divisible by both 3 and 5

  for (let i = 1; i <= arrayLength; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      forFizzBuzz.push("FizzBuzz " + i); // Push "FizzBuzz" if number is divisible by both 3 and 5
    } else if (i % 3 === 0) {
      forFizz.push("Fizz " + i); // Push "Fizz" if number is divisible by 3
    } else if (i % 5 === 0) {
      forBuzz.push("Buzz " + i); // Push "Buzz" if number is divisible by 5
    }
  }

  return { forFizz, forBuzz, forFizzBuzz }; // Return the arrays
}

const result = printFizzBuzz(100); 
console.log(result); 
