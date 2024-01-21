function solution(food) {
  const foods = [...food];
  
  foods.shift();
  
  for (let i = 0; i < foods.length; i++) {
    foods[i] = Math.floor(foods[i] / 2);
  }
  
  let leftSide = "";
  
  for (let i = 0; i < foods.length; i++) {
    while (foods[i] >= 1) {
      leftSide += String(i + 1);
      foods[i]--;
    }
  }

  const rightSide = [...leftSide].reverse().join("");
  const result = leftSide + "0" + rightSide;
  
  return result;
}