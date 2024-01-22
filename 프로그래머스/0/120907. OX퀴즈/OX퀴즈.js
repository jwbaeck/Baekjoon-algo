function solution(quiz) {
  const expressions = quiz.map((expression) => expression.split(" "));
  const answers = [];
  let result = null;
  
  for (const expression of expressions) {
    const calculate = expression[1];
    
    if (calculate === "-") {
      result = Number(expression[0]) - Number(expression[2]);
    } else {
      result = Number(expression[0]) + Number(expression[2]);
    }
    
    if (result === Number(expression[4])) {
      answers.push("O");
    } else {
      answers.push("X");
    }
  }
  
  return answers;
}