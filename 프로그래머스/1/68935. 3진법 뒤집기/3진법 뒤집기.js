function solution(n) {
  const ternaryNumber = n.toString(3);
  const reversedTernaryNumber = ternaryNumber.split("").reverse().join("");
  const decimalNumber = parseInt(reversedTernaryNumber, 3);

  return decimalNumber;
}