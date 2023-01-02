//We need a function that can transform a number (integer) into a string.

let num = 123;

console.log(typeof(numberToString(num)));

const numberToString = num => `${num}`; //one-line solution
/* function numberToString(num) {
  return `${num}`;
} */

