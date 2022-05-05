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
