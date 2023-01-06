//initials from a solid string
function abbrevName(name){

    // code away
    let splitted = name.split(' ');
    return `${splitted[0][0].toUpperCase()}.${splitted[1][0].toUpperCase()}`;

}