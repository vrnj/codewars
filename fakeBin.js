let b = 45385593107843568;

console.log(fakeBin(b));

function fakeBin(x){

  x = x.toString();
  let y = '';
  for(let i = 0; i < x.length; i++){
    if(Number(x[i] < 5)) {
      y += '0';
    }
    else {
      y += '1';
    }
  }

  return y;
}

//with replace
// function fakeBin(x){
//   return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
// }

//one more
//function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }