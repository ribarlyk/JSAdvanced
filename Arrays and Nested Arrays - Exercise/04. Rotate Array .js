function solve(array, rotations) {
  let arr = [];
  for (let i = 0; i < rotations; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  console.log(array.join(" "));
}
solve(["1", "2", "3", "4"], 2);

solve(["Banana", "Orange", "Coconut", "Apple"], 15);
