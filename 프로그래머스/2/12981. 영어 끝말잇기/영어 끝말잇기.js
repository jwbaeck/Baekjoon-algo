function solution(n, words) {
  let usedWords = new Set();  
  let lastChar = words[0][0]; 

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length === 1 || word[0] !== lastChar || usedWords.has(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    usedWords.add(word);
    lastChar = word[word.length - 1];
  }

  return [0, 0];
}