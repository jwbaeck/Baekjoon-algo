function solution(n) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    if (num ===2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) {
       return false; 
      }
    }
    
    return true;
  }

  let primeNums = 0;
  
  for (let i = 1; i <= n; i++) {
      if (isPrime(i)) {
          primeNums++;
      }
  }
  
  return primeNums;
}