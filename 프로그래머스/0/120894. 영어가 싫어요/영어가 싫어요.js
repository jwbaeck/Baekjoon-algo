function solution(numbers) {
  const numberLetters = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  
  const keys = Object.keys(numberLetters);
  let result = "";
  let letters = "";
  
  for (let i = 0; i < numbers.length; i++) {
    letters += numbers[i];
    
    if (keys.includes(letters)) {
      result += numberLetters[letters];
      letters = "";
    }
  }
  
  return Number(result);
}