function solve(list) {
  list.sort((a, b) => a - b);
  let startIndex = Math.floor(list.length / 2);

  let secondSide = list.slice(startIndex);
 return secondSide;
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
