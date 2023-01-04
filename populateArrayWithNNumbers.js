//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let myArr = [];
  
  for(let i = n; i > 0; i--){
    myArr.push(i);
  }
  return myArr;
};