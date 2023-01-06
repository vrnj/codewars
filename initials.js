//initials from a solid string
function abbrevName(name){

    // code away
    let splitted = name.split(' ');
    return `${splitted[0][0].toUpperCase()}.${splitted[1][0].toUpperCase()}`;

}

//with map
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }