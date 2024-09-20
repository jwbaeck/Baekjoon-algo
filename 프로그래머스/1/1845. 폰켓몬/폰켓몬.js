function solution(nums) {
  const maxSelect = nums.length / 2;
  const uniquePokemons = new Set(nums);

  return Math.min(uniquePokemons.size, maxSelect);
}