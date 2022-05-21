function solve(params) {
  let arr = [];
  for (let i = 0; i < params.length; i += 1) {
    if (i % 2 != 0) {
      arr.push(params[i]);
    }
  }
  let newArr = arr.map((x) => x * 2).reverse();
  console.log(newArr);
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
