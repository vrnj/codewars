//filter friends (name length 4) out

function friend(friends){
  //your code here
  let newArr = friends.filter(friend => {
    if(friend.length === 4){
      return friend;
    }
  })
  
  return newArr;
}

//one-line solution
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }