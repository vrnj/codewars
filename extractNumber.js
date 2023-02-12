


function highAndLow(numbers){
    let numbersArr = numbers.split(' ');

    let sorted = numbersArr.sort(function (a, b) {
        return Number(a) - Number(b);
    });

    sorted = sorted.map(x => Number(x));
    
    return `${sorted[sorted.length-1]} ${sorted[0]}`;

}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));