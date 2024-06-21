const INPUT_PATH = "../inputs/과자.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ").map(Number);
  const lengths = input[1].split(" ").map(Number);

  let left = 1;
  let right = Math.max(...lengths);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (const length of lengths) {
      count += Math.floor(length / mid);
    }

    if (count >= M) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(result);
}

solution(input);
