function factorial(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n == 1) {
      cache[n] = 1;
  
      return cache[n];
    }
  
    cache[n] = n * factorial(n - 1);
  
    return cache[n];
  }
  
  const n = 5;
  const cache = {};
  const result = factorial(n, cache);
  
  console.log('Result', result);