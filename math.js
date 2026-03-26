
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
console.log(factorialIterative(1)); 
console.log(factorialIterative(2)); 
console.log(factorialIterative(3)); 
console.log(factorialIterative(4)); 
console.log(factorialIterative(6)); 

