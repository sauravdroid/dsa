// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D

const find_permutation = function(str, pattern) {
    let i = 0, dict = {}, originalDict = {};
    const k = pattern.length;
    pattern.split('').forEach(char => {
      dict[char] = 0;
      if (!(char in originalDict)) {
        originalDict[char] = 0;
      }
      originalDict[char] += 1;
    });
  
    const uniqueLetters = Object.values(originalDict).length;
  
    for (let j = 0; j < str.length; j++) {
      const rightChar = str[j];
      if (rightChar in dict) {
        dict[rightChar] += 1;
      }
  
      // Checking window size
      if (j - i + 1 > k) { // Window Limit Reached
        // First checking if we have found a pattern
        const leftChar = str[i];
        if (leftChar in dict) {
          dict[leftChar] -= 1;
        }
        i++;
  
        const isPatternFound = Object.keys(dict).filter(item => {
          return dict[item] === originalDict[item];
        }).length === uniqueLetters;
        if (isPatternFound) return true;
      }
    }
  
    const isPatternFound = Object.keys(dict).filter(item => {
          return dict[item] === originalDict[item];
        }).length === uniqueLetters;
    
    return isPatternFound;
  };
  