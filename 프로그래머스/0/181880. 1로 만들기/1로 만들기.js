function solution(num_list) {
  let result = 0;
  
  const checkCounts = num => {
    let count = 0;
    
    while (num > 1) {
      if (num % 2 === 0) {
        num = num / 2;
        count++;
      } else {
        num = (num - 1) / 2;
        count++;
      }
    }
    
    return count;
  };
  
  for (const num of num_list) {
    result += checkCounts(num);
  }
  
  return result;
}