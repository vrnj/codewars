//In this kata you will create a function 
//that takes a list of non-negative integers and strings and returns a new list 
//with the strings filtered out.

function filter_list(l) {
  let numArr = [];
  
  l.forEach(element => {
    if(typeof element !== 'string' ){
      numArr.push(element);
    }
  });
  
  return numArr;
  // Return a new array with the strings filtered out
}

//with filter
// function filter_list(l) {
//  return l.filter(v => typeof v == "number")
// }