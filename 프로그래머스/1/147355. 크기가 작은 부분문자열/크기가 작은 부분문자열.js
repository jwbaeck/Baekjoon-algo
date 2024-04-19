function solution(t, p) {
  const pLength = p.length;
  const partialStrings = [];
  const results = [];
  
  for (let i = 0; i < t.length; i++) {
    let range = p.length;
    const partialString = t.substr(i, range);
    range += 1;
    
    if (partialString.length === pLength) {
      partialStrings.push(partialString);
    }
  }
  
  for (const string of partialStrings) {
    if (Number(string) <= Number(p)) {
      results.push(string);
    }
  }
  
  return results.length;
}