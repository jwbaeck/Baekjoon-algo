function solution(array) {
  const appearRecords = {};
  
  for (const number of array) {
    if (!appearRecords[number]) {
      appearRecords[number] = 1;
    } else {
      appearRecords[number]++;
    }
  }

  const maxAppearCount = Math.max(...Object.values(appearRecords));
  const mostFrequentNumbers = Object.keys(appearRecords).filter(key => appearRecords[key] === maxAppearCount);
  
  return mostFrequentNumbers.length >= 2 ? -1 : parseInt(mostFrequentNumbers[0]);
}