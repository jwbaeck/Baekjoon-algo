function solution(k, m, score) {
  const copiedScore = [...score].sort((a, b) => a - b);
  let maxProfit = 0;

  for (let i = 0; i < m; i++) {
    let currentProfit = 0;

    for (let j = i; j + m <= copiedScore.length; j += m) {
      const minScore = copiedScore[j];
      currentProfit += minScore * m;
    }

    if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
    }
  }

  return maxProfit;
}