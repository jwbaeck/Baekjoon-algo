function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const availableChars = [...alphabet].filter(char => !skip.includes(char));
  
  const result = [...s].map(char => {
    let currentIndex = availableChars.indexOf(char);
    let newIndex = (currentIndex + index) % availableChars.length;

    return availableChars[newIndex];
  });

  return result.join("");
}