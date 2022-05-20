function cooking(number, ...params) {
  number = Number(number);
  for (let i = 0; i < params.length; i++) {
    switch (params[i]) {
      case "chop":
        number /= 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number += 1;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number = number - number * 0.2;
    }
    console.log(number);
  }
}
cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");

/*Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
chop - divide the number by two
dice - square root of a number
spice - add 1 to the number
bake - multiply number by 3
fillet - subtract 20% from the number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.*/
