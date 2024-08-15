function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({priority, index}));
  let order = 0;

  while (queue.length > 0) {
    let current = queue.shift();

    if (queue.some(process => process.priority > current.priority)) {
      queue.push(current);
    } else {
      order++;
      
      if (current.index === location) {
        return order;
      }
    }
  }
}