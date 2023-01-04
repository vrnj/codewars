//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



function repeatStr (n, s) {
  
  let repeatedString = '';
  for(n; n > 0; n--) {
    repeatedString = repeatedString + s;
  }
  return repeatedString;
}