function solution(spell, dic) {
  const sortedElements = dic.map((element) => [...element].sort());
  const sortedSpells = spell.sort();
  let result = false;
  
  for (const element of sortedElements) {
    if (JSON.stringify(element) === JSON.stringify(sortedSpells)) {
      result = true;
    }
  }
  
  return result ? 1 : 2;
}