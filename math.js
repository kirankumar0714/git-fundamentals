function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide (x,y){
    return x/y;
}
console.log(add(3,4))
console.log(subtract(3,4))


function factorialIterative(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  return result;
}
console.log(factorialIterative(5));
console.log(factorialIterative(0)); 

