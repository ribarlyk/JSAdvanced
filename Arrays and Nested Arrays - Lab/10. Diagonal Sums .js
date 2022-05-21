function solve(matrix) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let firstIndex = 0;
  let secondIndex = matrix[0].length - 1;
  //console.log(firstIndex,secondIndex);
  matrix.forEach((element) => {
    firstDiagonal += element[firstIndex++];
    secondDiagonal += element[secondIndex--];
  });
  console.log(firstDiagonal + " " + secondDiagonal);
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
