//TeamX score counter
// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

let score = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];

console.log(points(score));

function points(games) {
  
 let scoreTeamX = 0;
  
  games.forEach(game => {
    
    if(parseInt(game[0]) > Number(game[2])) {
       scoreTeamX = scoreTeamX + 3;
    }
    else if (Number(game[0]) == Number(game[2])) {
        scoreTeamX = scoreTeamX + 1;
    }
  
  });
  
  return scoreTeamX;
  
}