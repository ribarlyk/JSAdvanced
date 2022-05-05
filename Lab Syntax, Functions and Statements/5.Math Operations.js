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
/* 5.Math Operations
Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.

Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console.*/