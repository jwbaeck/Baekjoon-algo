function solution(n, t, m, p) {
  let num = 0;
  let sequence = "";
  let answer = "";
  
  while (sequence.length < t * m) {
    sequence += num.toString(n).toUpperCase();
    num++;
  }

  for (let i = 0; i < t; i++) {
    answer += sequence[i * m + (p - 1)];
  }

  return answer;
}