function solution(chicken) {
  let coupons = chicken;
  let serviceChickens = 0;

  while (coupons >= 10) { 
    let additionalServiceChickens = Math.floor(coupons / 10);
    serviceChickens += additionalServiceChickens; 
    coupons = (coupons % 10) + additionalServiceChickens;
  }

  return serviceChickens;
}