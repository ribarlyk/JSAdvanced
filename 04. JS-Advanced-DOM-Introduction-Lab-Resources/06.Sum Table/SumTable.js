function sumTable() {
  let items = document.querySelectorAll("tr td:nth-of-type(2)");
  let sum = Array.from(items).reduce((a, x) => {
    let currentSum = Number(x.textContent) || 0;
    return a + currentSum;
  }, 0);
  let sumElement = document.getElementById("sum");
  if (sumElement.textContent > 0) {
    sum;
  } else {
    sumElement.textContent = sum;
  }
}
