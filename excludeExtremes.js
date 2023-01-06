let numbers = [ 6, 2, 1, 8, 10 ];

console.log(sumArray(numbers));

function sumArray(array) {
  if (array == null) {
      return 0;
  } 
  else if (array.length < 2) {
      return 0;
  } 
  else {
      array = array.sort(function(a,b) {return a - b;});
      let sum = 0;
      for (let i = 1; i < array.length - 1; i++) {
        sum += array[i];
      }
      return sum;
    }
}
    


