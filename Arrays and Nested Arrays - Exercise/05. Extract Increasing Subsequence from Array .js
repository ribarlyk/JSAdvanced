function solve(array) {
  const newArr = [];
  newArr.push(array[0]);
  array.reduce((previous, current, index) =>{
    if (previous <= current) {
      newArr.push(current);
      return current;
    } else {
      array.slice(index);
      return previous;
    }
  });
  return newArr
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1,123, 2, 1233, 4]));


