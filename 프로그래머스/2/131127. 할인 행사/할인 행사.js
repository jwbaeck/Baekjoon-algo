function solution(want, number, discount) {
  let desiredProducts = {};
  
  want.forEach((item, index) => {
    desiredProducts[item] = number[index];
  });

  let validDays = 0;
  const currentDiscount = {};

  for (let i = 0; i < discount.length; i++) {
    let product = discount[i];
    currentDiscount[product] = (currentDiscount[product] || 0) + 1;
    
    if (i >= 10) {
      let removedProduct = discount[i - 10];
      
      if (currentDiscount[removedProduct] === 1) {
        delete currentDiscount[removedProduct];
      } else {
        currentDiscount[removedProduct]--;
      }
    }

    if (i >= 9) {
      let isMatch = true;
      
      for (let product in desiredProducts) {
        if ((currentDiscount[product] || 0) < desiredProducts[product]) {
          isMatch = false;
          break;
        }
      }
      
      if (isMatch) {
        validDays++;
      }
    }
  }

  return validDays;
}