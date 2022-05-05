function solve(n, m) {
  let numberOne = Number(n);
  let numberTwo = Number(m);
  let sum = 0;
  for (let i = numberOne; i <= numberTwo; i++) {
    sum += i;
  }

  return sum;
}
solve("-8", "20");
