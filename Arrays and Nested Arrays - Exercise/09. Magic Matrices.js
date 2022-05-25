function solve(matrix) {
  let isMagical = false;
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let cSum = 0;
    let rSum = 0;
    for (let k = 0; k < matrix[i].length; k++) {
      cSum += matrix[i][k];
      rSum += matrix[k][i];
    }
    
    newArr.push(cSum);
    newArr.push(rSum);
  }

  let firsElement = newArr[0];
  isMagical = newArr.every((element) => firsElement === element);
  console.log(isMagical);
}
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
  
]);
