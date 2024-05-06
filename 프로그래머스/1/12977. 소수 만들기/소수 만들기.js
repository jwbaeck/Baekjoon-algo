function solution(nums) {
  const isPrimeNumber = number => {
    if (number < 2) {
      return false;
    }
    
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  };
  
  let result = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        
        if (isPrimeNumber(sum)) {
          result++;
        }
      }
    }
  }
  
  return result;
}