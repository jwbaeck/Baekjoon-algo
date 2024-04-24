function solution(s) {
  const words = s.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      const firstLetter = words[i][0].toUpperCase();
      const restLetter = words[i].substring(1).toLowerCase(); 
      
      result.push(firstLetter + restLetter);
    } else {
      result.push("");
    }
  }

  return result.join(" ");
}