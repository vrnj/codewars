//chjeck if triangle can be built
function isTriangle(a,b,c)
{
  if(a + b > c && a + c > b && b + c > a){
    return true;
  } 
  else {
    return false;
  }
 
}


//one-liner
//return a + b > c && a + c > b && c + b > a;
