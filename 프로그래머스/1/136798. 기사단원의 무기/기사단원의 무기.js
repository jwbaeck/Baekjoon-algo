function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let divisorsCounts = 0;
    
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
          if (i / j === j) {
            divisorsCounts += 1;
          } else {
            divisorsCounts += 2;
          }
      }
    }

    let weaponPower = divisorsCounts;

    if (weaponPower > limit) {
      weaponPower = power;
    }

    result += weaponPower;
  }

  return result;
}