function solution(s) {
  const numbers = s.split(" ").map(element => Number(element));
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);
  const result = `${minNumber} ${maxNumber}`;
  
  return result;
}