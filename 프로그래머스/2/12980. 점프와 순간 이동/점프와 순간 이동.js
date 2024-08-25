function solution(n) {
  let batteryUsage = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      batteryUsage += 1;
    }
    
    n = Math.floor(n / 2);
  }

  return batteryUsage;
}