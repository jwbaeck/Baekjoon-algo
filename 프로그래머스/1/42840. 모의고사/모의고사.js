function solution(answers) {
  const result = [];
  const patterns = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const scores = new Array(3).fill(0);

  answers.forEach((answer, index) => {
    patterns.forEach((pattern, patternIndex) => {
      if (answer === pattern[index % pattern.length]) {
          scores[patternIndex]++;
      }
    });
  });

  const maxScore = Math.max(...scores);
  
  scores.forEach((score, index) => {
    if (score === maxScore) {
        result.push(index + 1);
    }
  });

  return result;
}