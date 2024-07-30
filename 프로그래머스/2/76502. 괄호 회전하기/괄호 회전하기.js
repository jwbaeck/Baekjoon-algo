function solution(s) {
  const n = s.length;
  let answer = 0;

  function isValid(bracketStrings) {
    const stack = [];
    const matches = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    for (let char of bracketStrings) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== matches[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  for (let i = 0; i < n; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i);
    
    if (isValid(rotatedString)) {
      answer++;
    }
  }

  return answer;
}