//sorting digits in int desc
let number = 42145;

console.log(descendingOrder(number));

function descendingOrder(n){
  n = Array.from(String(n), String);
  n = n.sort((a, b) => b - a);
  let newN = '';
  n.forEach(element => newN += element);   

  return parseInt(newN);
}
