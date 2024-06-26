function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA === diffB) {
      return b - a;
    } else {
      return diffA - diffB;
    }
  });
}