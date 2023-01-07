//string representation to binary

let array = [0, 0, 0, 1];

const binaryArrayToNumber = arr => {
  // your code
  let str = '';
  arr.forEach(element => {
    str += element;
  })
  return parseInt(str, 2);
};

console.log(binaryArrayToNumber(array));