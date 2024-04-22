function solution(k, tangerine) {
  const minusCounts = tangerine.length - k;
  
  const tangerineRecords = {};
  
  for (const size of tangerine) {
    if (!tangerineRecords[size]) {
      tangerineRecords[size] = 1;
    } else {
      tangerineRecords[size] += 1;
    }
  }

  const sizes = Object.values(tangerineRecords).sort((a, b) => a - b);
  let removed = 0;
  let leftCounts = sizes.length;
  
  for (const count of sizes) {
    if (removed + count <= minusCounts) {
      removed += count;
      leftCounts -= 1;
    } else {
      break;
    }
  }
  
  return leftCounts;
}