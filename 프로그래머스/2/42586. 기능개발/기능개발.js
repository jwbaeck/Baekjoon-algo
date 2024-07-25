function solution(progresses, speeds) {
  const daysNeeded = progresses.map((progress, index) => 
    Math.ceil((100 - progress) / speeds[index])
  );
  const result = [];
  let currentRelease = daysNeeded[0];
  let count = 1;

  for (let i = 1; i < daysNeeded.length; i++) {
    if (daysNeeded[i] <= currentRelease) {
      count++;
    } else {
      result.push(count);
      
      currentRelease = daysNeeded[i];
      count = 1;
    }
  }

  result.push(count);

  return result;
}