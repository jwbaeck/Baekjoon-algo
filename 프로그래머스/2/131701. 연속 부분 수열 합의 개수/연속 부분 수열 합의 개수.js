function solution(elements) {
  let n = elements.length;
  let extendedElements = [...elements, ...elements];
  let sums = new Set();

  for (let start = 0; start < n; start++) {
    let currentSum = 0;

    for (let length = 1; length <= n; length++) {
      currentSum += extendedElements[start + length - 1];
      sums.add(currentSum);
    }
  }

  return sums.size;
}