//Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

let stack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

console.log(findNeedle(stack));

function findNeedle(haystack) {
  if(haystack.includes('needle')){
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
}

//one-line solution
//const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
