//We need a function that can transform a number (integer) into a string.

let num = 123;

console.log(typeof(numberToString(num)));

function numberToString(num) {
  return `${num}`;//with template literals
}

