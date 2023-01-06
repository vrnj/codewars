let string = "This website is for losers LOL!";

console.log(disemvowel(string));

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = '';

  str = Array.from(String(str), String);
  str.forEach(char => {
    let newChar = char;
    newChar = newChar.toLowerCase();
    if(!vowels.includes(newChar)) {
        console.log(!vowels.includes(char));
        newString += char;
    }
    
  });
  
  return newString;
}