function solve(param1, param2, param3) {
  let lengthParamOne = param1.length;
  let lengthParamTwo = param2.length;
  let lengthParamThree = param3.length;
  let sum = lengthParamOne + lengthParamTwo + lengthParamThree;
  let avarageSum = Math.round(sum / 3);

  console.log(sum);
  console.log(avarageSum);
}
solve("chocolate", "ice cream", "cake");
/* Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console in two lines.*/