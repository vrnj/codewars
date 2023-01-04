//very basic calculator

console.log(basicOp('+', 2, 2));

function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
      case '+':
        return value1 + value2;
      break;
      case '-':
        return value1 - value2;
      break;
      case '*':
        return value1 * value2;
      break;
      case '/':
        return value1 / value2;
      break;
      default:
        return 'instructions unclear';     
      
  }
}