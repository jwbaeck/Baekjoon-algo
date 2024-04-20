function solution(s) {
  const result = Array.from({length: s.length}, () => -1);
  
  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        result[i] = i - j;
        break;
      }
    }
  }
  
  return result
}