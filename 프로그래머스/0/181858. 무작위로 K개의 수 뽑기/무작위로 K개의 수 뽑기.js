function solution(arr, k) {
  const copiedArray = [...arr];
  const set = new Set(copiedArray);
  const uniqueArray = [...set];
  
  if (uniqueArray.length > k) {
    return uniqueArray.slice(0, k);
  } else {
    const differ = k - uniqueArray.length;
    
    for (let i = 0; i < differ; i++) {
      uniqueArray.push(-1);
    }
    
    return uniqueArray;
  }
}