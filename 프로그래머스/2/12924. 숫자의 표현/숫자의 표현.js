function solution(n) {
  let result = 0;
  
  for (let m = 1; m * (m + 1) / 2 <= n; m++) {
    const sumM = m * (m - 1) / 2;
    
    if ((n - sumM) % m === 0) {
        result++;
    }
  }
  
  return result;
}