function solution(topping) {
  const leftSet = new Set();
  const rightCount = new Map();
  let result = 0;

  for (let i = 0; i < topping.length; i++) {
    rightCount.set(topping[i], (rightCount.get(topping[i]) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    leftSet.add(topping[i]);
    rightCount.set(topping[i], rightCount.get(topping[i]) - 1);

    if (rightCount.get(topping[i]) === 0) {
      rightCount.delete(topping[i]);
    }

    if (leftSet.size === rightCount.size) {
      result++;
    }
  }

  return result;
}