let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
  let phoneFormat = '(xxx) xxx-xxxx';
  
  for(let i = 0; i < phoneFormat.length; i++) {
    phoneFormat = phoneFormat.replace('x', numbers[i]);
  }
  
  return phoneFormat;
}

console.log(createPhoneNumber(numbers));

//code runner shortcut - ctrl + alt + N