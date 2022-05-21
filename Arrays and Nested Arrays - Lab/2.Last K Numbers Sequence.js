function lastKNumber(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let startIndex = Math.max(0, i - k);
    let currentNumber = result
      .slice(startIndex, startIndex + k)
      .reduce((acc, el) => acc + el, 0);
    result.push(currentNumber);
  }
  return result;
}
lastKNumber(6, 3);
lastKNumber(8, 2);
