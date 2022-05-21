function solve(params, num) {
  let arr = [];
  for (let i = 0; i < params.length; i += num) {
    arr.push(params[i]);
  }
  return arr;
}
solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
