function arguments() {
  let arg = arguments;
  let obj = {};
  Array.from(arg).forEach((el) => {
    let type = typeof el;
    console.log(`${type}: ${el}`);

    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
  });
  let valuesOfObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (line of valuesOfObj) {
    console.log(line.join(" = "));
  }
}
arguments("cat", "dog", 42, function () {
  console.log("Hello world!");
});
