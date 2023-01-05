//inverted numeric values
function invert(array) {
  
  for(let i = 0; i < array.length; i++){
    array[i] = -array[i];
  }
   return array;
}

//inverted values using map
//const invert = array => array.map(num => -num);
