const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ");

function solution(n, k) {
  const result = [];
  const people = [];

  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  let count = 1;

  while (people.length) {
    const removedPerson = people.shift();

    if (count % k === 0) {
      result.push(removedPerson);
    } else {
      people.push(removedPerson);
    }

    count++;
  }

  console.log(`<${result.join(", ")}>`)
}

solution(n, k);
