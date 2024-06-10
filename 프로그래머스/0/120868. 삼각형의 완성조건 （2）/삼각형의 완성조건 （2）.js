function solution(sides) {
  const [a, b] = sides;
  const maxSide = Math.max(a, b);
  const minSide = Math.min(a, b);
  let result = 0;

  for (let i = maxSide - minSide + 1; i <= maxSide; i++) {
    result++;
  }

  for (let i = maxSide + 1; i < a + b; i++) {
    result++;
  }

  return result;
}