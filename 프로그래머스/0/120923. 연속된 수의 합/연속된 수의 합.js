function solution(num, total) {
  const average = total / num;
  let start = Math.floor(average - (num - 1) / 2);
  let result = [];
  
  for (let i = 0; i < num; i++) {
    result.push(start + i);
  }

  return result;
}