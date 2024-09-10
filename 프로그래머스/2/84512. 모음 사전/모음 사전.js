function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let answer = 0;
  let multiplier = 781;
  
  for (let i = 0; i < word.length; i++) {
    const index = vowels.indexOf(word[i]);
    answer += index * multiplier + 1;
    multiplier = (multiplier - 1) / 5;
  }
  
  return answer;
}