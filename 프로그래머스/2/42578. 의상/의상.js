function solution(clothes) {
  const clothingMap = new Map();

  clothes.forEach(([name, type]) => {
    if (clothingMap.has(type)) {
      clothingMap.set(type, clothingMap.get(type) + 1);
    } else {
      clothingMap.set(type, 1);
    }
  });

  let combinations = 1;
  
  for (let count of clothingMap.values()) {
    combinations *= (count + 1);
  }

  return combinations - 1;
}