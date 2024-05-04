function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  
  for (let i = 0; i < sizes.length; i++) {
    const [width, height] = sizes[i].sort((a, b) => a - b);
    maxWidth = Math.max(maxWidth, height);
    maxHeight = Math.max(maxHeight, width);
  }
  
  const result = maxWidth * maxHeight;
  
  return result;
}