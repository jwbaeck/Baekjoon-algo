function gcd(a, b) {
  while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}