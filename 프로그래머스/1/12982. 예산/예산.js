function solution(d, budget) {
  const requestSum = d.reduce((p, n) => p + n, 0);
  
  if (requestSum === budget) {
    const departmentCounts = d.length;
    
    return departmentCounts;
  }
  
  const sortedDepartments = d.sort((a, b) => a - b);
  
  let sum = 0;
  let counts = 0;
  
  for (const department of sortedDepartments) {
    sum += department;
    
    if (sum > budget) {
      return counts;
    }
    
    counts++;
  }
  
  return counts;
}