const INPUT_PATH = "../inputs/부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const array = input[1].split(" ").map(Number);
  const result = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        result[i] = Math.max(result[i], result[j] + 1);
      }
    }
  }

  console.log(Math.max(...result));
}

solution(input);
