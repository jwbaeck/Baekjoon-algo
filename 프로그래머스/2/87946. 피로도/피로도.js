function solution(k, dungeons) {
  let maxDungeons = 0;

  function exploreDungeons(currentFatigue, exploredCount, availableDungeons) {
    maxDungeons = Math.max(maxDungeons, exploredCount);

    for (let i = 0; i < availableDungeons.length; i++) {
      const [minRequired, consumption] = availableDungeons[i];

      if (currentFatigue >= minRequired) {
        const remainingDungeons = availableDungeons.slice(0, i).concat(availableDungeons.slice(i + 1));
        exploreDungeons(currentFatigue - consumption, exploredCount + 1, remainingDungeons);
      }
    }
  }

  exploreDungeons(k, 0, dungeons);
  
  return maxDungeons;
}