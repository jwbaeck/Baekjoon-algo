function solution(k, scores) {
  const hallOfFames = [];
  const results = [];

  scores.forEach((score, index) => {
    if (index < k) {
      hallOfFames.push(score);
      hallOfFames.sort((a, b) => a - b);
    } else {
      if (score > hallOfFames[0]) {
        hallOfFames.shift();
        hallOfFames.push(score);
        hallOfFames.sort((a, b) => a - b);
      }
    }

    results.push(hallOfFames[0]);
  });

  return results;
}