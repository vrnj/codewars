//finding the smalles value

function findSmallestInt(args) {
    let min = args[0];
    
    args.forEach(e => {
      if(e < min){
        min = e;
      }
    });
    
    return min;
}