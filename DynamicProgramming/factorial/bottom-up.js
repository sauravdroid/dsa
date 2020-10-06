function factorial(n) {

    let result = 1;
  
    // Here the result is where the factorial of the previous number is stored
    for (let i = 1; i <= n; i++) {
      result = result * i;
      console.log(i, i - 1, result);
    }
  
    return result;
  }
  
  const n = 5;
  const result = factorial(n);
  
  console.log('Result', result);