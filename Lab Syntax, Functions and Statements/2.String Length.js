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
