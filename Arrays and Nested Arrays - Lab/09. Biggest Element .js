function solve(matrix) {
  let lengthOfMatrix = matrix.length;
  let bigNum = [];
  for (let i = 0; i < lengthOfMatrix; i++) {
    bigNum.push(matrix[i].sort((a, b) => b - a).shift());
  }
  console.log(bigNum.sort((a, b) => a - b).pop());
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
