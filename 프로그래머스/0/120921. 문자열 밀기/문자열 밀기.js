function solution(A, B) {
  if (A.length !== B.length) {
    return -1;
  }
  
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return i;
    }
    
    A = A.slice(-1) + A.slice(0, -1);
  }

  return -1;
}