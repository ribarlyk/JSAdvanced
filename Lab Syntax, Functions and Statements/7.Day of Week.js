function solve(day) {
  let dayOfTheWeek;
  switch (day) {
    case "Monday":
      dayOfTheWeek = 1;
      break;
    case "Tuesday":
      dayOfTheWeek = 2;
      break;
    case "Wednesday":
      dayOfTheWeek = 3;
      break;
    case "Thursday":
      dayOfTheWeek = 4;
      break;
    case "Friday":
      dayOfTheWeek = 5;
      break;
    case "Saturday":
      dayOfTheWeek = 6;
      break;
    case "Sunday":
      dayOfTheWeek = 7;
      break;
    default:
      console.log("error");
  }
  if (typeof dayOfTheWeek === "number") {
    console.log(dayOfTheWeek);
  }
}
solve("Msonday");
/*7.Day of Week
Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single-string argument.
The output should be returned as a result. */