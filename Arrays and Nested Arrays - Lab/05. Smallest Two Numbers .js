function solve(params) {
  params.sort((a, b) => a - b);
  console.log(params[0], params[1]);
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
