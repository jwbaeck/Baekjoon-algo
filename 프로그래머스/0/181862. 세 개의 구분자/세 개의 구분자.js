function solution(myStr) {
  let result = myStr.split(/[abc]/).filter(part => part !== "");

  if (result.length === 0) {
    return ["EMPTY"];
  }

  return result;
}