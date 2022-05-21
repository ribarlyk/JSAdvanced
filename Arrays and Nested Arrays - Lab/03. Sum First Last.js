function sumFirstLast(array) {
  let newArr = array.map((x) => Number(x));
  console.log(newArr[0] + newArr[newArr.length - 1]);
}
sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);
