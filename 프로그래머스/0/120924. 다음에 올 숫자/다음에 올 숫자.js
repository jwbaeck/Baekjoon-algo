function solution(common) {
  const difference = common[1] - common[0];
  let isArithmetic = true;
  
  for (let i = 2; i < common.length; i++) {
    if (common[i] - common[i - 1] !== difference) {
      isArithmetic = false;
      break;
    }
  }

  if (isArithmetic) {
    return common[common.length - 1] + difference;
  }

  const ratio = common[1] / common[0];
  let isGeometric = true;
  
  for (let i = 2; i < common.length; i++) {
    if (common[i] / common[i - 1] !== ratio) {
      isGeometric = false;
      break;
    }
  }

  if (isGeometric) {
    return common[common.length - 1] * ratio;
  }
}