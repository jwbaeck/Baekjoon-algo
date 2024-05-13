function solution(numer1, denom1, numer2, denom2) {
  let lcm = 1;
  
  while (true) {
    if ((lcm % denom1 === 0) && (lcm % denom2 === 0)) {
      break;
    }
    
    lcm++;
  }
  
  const newNumer1 = numer1 * (lcm / denom1);
  const newNumer2 = numer2 * (lcm / denom2);
  const newNumer = newNumer1 + newNumer2;
  const fractions = [newNumer, lcm];
  let gcd = 1;
  
  for (let i = 2; i <= Math.min(newNumer, lcm); i++) {
    if (newNumer % i === 0 && lcm % i === 0) {
      gcd = i;
    }
  }
  
  const result = [newNumer / gcd, lcm / gcd];
  
  return result;
}