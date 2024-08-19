function solution(s) {
  let copiedString = s;
  let count = 0;
  let removedZeros = 0;

  while (copiedString !== "1") {
    count++;

    let zeros = copiedString.split("0").length - 1;
    removedZeros += zeros;
    copiedString = copiedString.replace(/0/g, '');
    copiedString = copiedString.length.toString(2);
  }

  return [count, removedZeros];
}