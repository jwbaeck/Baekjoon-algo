function solution(picture, k) {
  const result = [];

  for (let i = 0; i < picture.length; i++) {
    let newFile = "";
    
    for (let j = 0; j < picture[i].length; j++) {
      newFile += picture[i][j].repeat(k);
    }
    
    for (let m = 0; m < k; m++) {
      result.push(newFile);
    }
  }

  return result;
}