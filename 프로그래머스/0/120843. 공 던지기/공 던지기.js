function solution(numbers, k) {
  let currentIndex = 0;

  for (let i = 1; i < k; i++) {
    currentIndex = (currentIndex + 2) % numbers.length;
  }

  return numbers[currentIndex];
}