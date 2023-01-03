//Consider an array/list of sheep where some sheep may 
//be missing from their place. We need a function that 
//counts the number of sheep present in the array (true means present).

let arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

console.log(countSheeps(arrayOfSheep));

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheepTotal = 0;
  arrayOfSheep.forEach(sheep => {
    if(sheep){
      sheepTotal++;
    }
  });
  
  return sheepTotal;
}