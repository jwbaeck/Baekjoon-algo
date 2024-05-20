function solution(score) {
  const averages = [];
  const result = [];
  
  for (const eachScore of score) {
    const average = (eachScore[0] + eachScore[1]) / 2;
    
    averages.push(average);
  }
  
  const sortedAverages = [...averages].sort((a, b) => b - a);
  
  for (const average of averages) {
    result.push(sortedAverages.indexOf(average) + 1);
  }
  
  return result;
}