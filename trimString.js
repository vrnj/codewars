let testString = "adam"

console.log(removeChar(testString))
function removeChar(str){
 //You got this!
    str = [...str];
    str.shift();
    str.pop();

    return str.join('');

};
