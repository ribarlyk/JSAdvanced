function sameNumbers(num) {
  let numToString = String(num);
  let firstChar = numToString[0];
  let sum = Number(firstChar);
  let isTrue = true;
  
  for (let i = 1; i < numToString.length; i++) {
    if (firstChar === numToString[i]) {
      sum += Number(numToString[i]);
    } else {
      isTrue = false;
      sum += Number(numToString[i]);
    }
  }
  console.log(isTrue);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);

/*Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console.*/
