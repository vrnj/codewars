//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.



let string = "ooxXm";

console.log(XO(string));

function XO(str) {
    let countX = 0;
    let countO = 0;
  
    [...str].forEach(letter => {
      if(letter.toLowerCase() === 'x') {
        countX++;
      }
      else if(letter.toLowerCase() === 'o'){
        countO++;
      }
    });

    let result = countX === countO ? true: false;
    return result;
}