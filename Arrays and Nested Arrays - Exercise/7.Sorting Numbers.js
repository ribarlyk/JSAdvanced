function solve(array) {
  let sortedArray = [];
  array.sort((a, b) => a - b);
  let arrLength = array.length / 2;
  let leftSide = array.slice(0, arrLength);
  let rightSide = array.slice(arrLength);
  for (let i = 0; i < array.length / 2; i++) {
    sortedArray.push(leftSide.shift());
    sortedArray.push(rightSide.pop());
  }
  if (sortedArray.includes(undefined)) {
    let indexToSlice = sortedArray.indexOf(undefined);

    sortedArray.splice(indexToSlice, 1);
  }
  return sortedArray;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 12]));
