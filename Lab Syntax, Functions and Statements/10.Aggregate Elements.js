function solve(arr) {
  let sum = 0;
  let sumTwo = 0;
  let concat = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumTwo += 1 / arr[i];
    concat += String(arr[i]);
  }
  console.log(sum);
  console.log(sumTwo);
  console.log(concat);
}
solve([2, 4, 8, 16]);
