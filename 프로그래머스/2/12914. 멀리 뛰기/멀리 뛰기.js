function solution(n) {
  const quotient = 1234567;
  
  if (n === 1) {
    return 1;
  }
  
  if (n === 2) {
    return 2;
  }

  let a = 1;
  let b = 2;
  
  for (let i = 3; i <= n; i++) {
    let temp = (a + b) % quotient;
    a = b;
    b = temp;
  }
  
  return b;
}