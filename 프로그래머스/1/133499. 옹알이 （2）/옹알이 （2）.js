function solution(babbling) {
  let result = 0;

  babbling.forEach(word => {
    let isValid = true;
    let matchString = "";
    const matches = word.match(/(aya|ye|woo|ma)/g);

    if (matches && matches.join("") === word) {
      for (let i = 0; i < matches.length; i++) {
          if (matches[i] === matchString) {
              isValid = false;
              break;
          }
        
        matchString = matches[i];
      }
      
      if (isValid) {
        result++;
      }
    }
  });

  return result;
}