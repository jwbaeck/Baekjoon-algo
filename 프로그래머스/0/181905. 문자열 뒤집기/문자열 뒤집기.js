function solution(my_string, s, e) {
  const reverseRange = my_string.slice(s, e + 1);
  const reversedPart = reverseRange.split("").reverse().join("");
  const result = my_string.substring(0, s) + reversedPart + my_string.substring(e + 1);

  return result;
}