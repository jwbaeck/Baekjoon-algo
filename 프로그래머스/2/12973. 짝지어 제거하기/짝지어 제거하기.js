function solution(S) {
  const stack = [];

  for (const char of S) {
    if (stack.length === 0) {
      stack.push(char); 
    } else {
      if (stack[stack.length - 1] === char) {
        stack.pop(); 
      } else {
        stack.push(char); 
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}