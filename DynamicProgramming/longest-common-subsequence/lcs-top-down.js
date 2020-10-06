function lcs(a, b, i, j, cache) {
    if (cache[i][j]) {
      return cache[i][j];
    }
  
    if (i === 0 || j === 0) {
      cache[i][j] = 0;
      return cache[i][j];
    }
  
    if (a[i - 1] === b[j - 1]) {
      cache[i][j] = 1 + lcs(a, b, i - 1, j - 1, cache);
  
      return cache[i][j];
    } else {
      cache[i][j] = Math.max(
        lcs(a, b, i - 1, j, cache),
        lcs(a, b, i, j - 1, cache)
      );
  
      return cache[i][j];
    }
  }
  
  const a = 'abcbdab';
  const b = 'bdcaba';
  const cache = new Array(a.length + 1).fill(null).map(_ => new Array(b.length + 1).fill(null));
  
  const result = lcs(a, b, a.length, b.length, cache);
  
  console.log('Result ', result);