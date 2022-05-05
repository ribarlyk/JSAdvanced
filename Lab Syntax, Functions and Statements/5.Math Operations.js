function solve(arg1, arg2, opr) {
  let result;
  switch (opr) {
    case "+":
      result = arg1 + arg2;
      break;
    case "-":
      result = arg1 - arg2;
      break;
    case "*":
      result = arg1 * arg2;
      break;
    case "/":
      result = arg1 / arg2;
      break;
    case "%":
      result = arg1 % arg2;
      break;
    case "**":
      result = arg1 ** arg2;
      break;
  }
  console.log(result);
}
solve(5, 6, "+");
