let test = [2, 1, 1];

function stray(numbers) {
  let strayN = numbers[0];
  if (strayN !== numbers[1] && strayN !== numbers[2]) return strayN;

    for(let i = 1; i < numbers.length; i++){
      if(strayN !== numbers[i])return numbers[i];
    }
}

console.log(stray(test))