//You are given an array (which will have a length of at least 3, 
//but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

let numbers = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(numbers));

function findOutlier(integers){
  //your code here
  let evens = integers.filter(a => a % 2 === 0);
  let odds = integers.filter(a  => a % 2 !== 0);
  return evens.length === 1 ? evens[0] : odds[0];
  
  
}