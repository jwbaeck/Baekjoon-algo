function solution(brown, yellow) {
  const totalCells = brown + yellow;

  for (let height = 3; height <= totalCells; height++) {
    if (totalCells % height === 0) {
      const width = totalCells / height;

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}