//You are going to be given a word. 
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.



let s = 'testing';

console.log(getMiddle(s));

function getMiddle(s)
{
  //Code goes here!
  if(s.length % 2 === 0){
    return s[s.length/2-1] + s[s.length/2];
  }
  else {
    return s[Math.floor(s.length/2)];
  }
}

//best practice with slice
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }