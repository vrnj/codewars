let people = ["Peter"];
console.log(likes(people));

function likes(names) {
  // TODO
  let myString = '';
  if(names.length === 0){
    return "no one likes this";
  }
  else if(names.length === 1){
    myString = `${names[0]} likes this`;
  }
  else if(names.length === 2){
    myString = `${names[0]} and ${names[1]} like this`;
  }
  else if(names.length === 3) {
    myString = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } 
  else {
    myString = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
  return myString;
  
}