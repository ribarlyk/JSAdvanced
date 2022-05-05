function solve(arg) {
  let typeOfParam = typeof arg;

  if (typeOfParam == "number") {
    let faceOfRound = Math.pow(arg, 2) * Math.PI;
    console.log(faceOfRound.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfParam}.`
    );
  }
}
solve(5);
solve("name");
