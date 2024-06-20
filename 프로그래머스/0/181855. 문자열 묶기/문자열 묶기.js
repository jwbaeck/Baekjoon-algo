function solution(strArr) {
  const lengthArr = strArr.map(element => element.length);
  const countsRecord = {};
  
  for (const length of lengthArr) {
    if (!countsRecord[length]) {
      countsRecord[length] = 1;
    } else {
      countsRecord[length]++;
    }
  }
  
  const modeNum = Math.max(...Object.values(countsRecord));
  
  return modeNum
}