function solution(bin1, bin2) {
  const num1 = parseInt(bin1, 2);
  const num2 = parseInt(bin2, 2);
  const sum = num1 + num2;
  
  return sum.toString(2);
}