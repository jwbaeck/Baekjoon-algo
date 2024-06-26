function solution(dots) {
  const xCoords = dots.map(dot => dot[0]);
  const yCoords = dots.map(dot => dot[1]);
  const xMax = Math.max(...xCoords);
  const xMin = Math.min(...xCoords);
  const yMax = Math.max(...yCoords);
  const yMin = Math.min(...yCoords);
  const width = xMax - xMin;
  const height = yMax - yMin;

  return width * height;
}