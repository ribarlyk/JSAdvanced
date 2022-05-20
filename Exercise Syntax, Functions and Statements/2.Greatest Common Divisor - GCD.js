function greatestCommonDivisor(a, b) {
  if (b) {
    greatestCommonDivisor(b, a % b);
  } else {
    console.log(a);
  }
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

/*Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.*/
