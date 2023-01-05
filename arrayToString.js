//Write a function that takes an array of words and smashes them together into a sentence 
//and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
//but you should add spaces between each word. Be careful,
// there shouldn't be a space at the beginning or the end of the sentence!

let words = ['hello', 'world', 'this', 'is', 'great'];

console.log(smash(words));

function smash (words) {
  let myString = '';
  words.forEach(word => {
    myString += `${word} `;
  });
   return myString.trim();
};

//with join
// smash = function (words) {
//   return words.join(" ");
// };