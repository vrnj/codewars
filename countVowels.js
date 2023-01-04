//counting vowels in a string

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}