function solution(A, B) {
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => a - b);
  let startIndex = 0;
  let lastIndex = sortedA.length - 1;
  let result = 0;
  
  for (let i = 0; i < sortedA.length; i++) {
    const multiple = sortedA[startIndex] * sortedB[lastIndex];
    result += multiple;
    startIndex++;
    lastIndex--;
  }
  
  return result;
}