
let flow = [[10,0],[3,5],[5,8]];

var number = function(busStops){
  // Good Luck!
  
  let sob = 0;
  
  for(let i = 0; i < busStops.length; i++) {
    console.log(busStops[i][0]);
    sob = (sob + busStops[i][0]) - busStops[i][1];

  }
  
  return sob;
}

console.log(number(flow));