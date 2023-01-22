let test = 'The quick brown fox jumps over the lazy dog.';

function reverseWords(str) {
  // Go for it

  str = str.split(' ');
  str = str.map(x => x.split('').reverse());
  str = str.map(x => x.join(''));
  return str.join(' ');
}

console.log(reverseWords(test));