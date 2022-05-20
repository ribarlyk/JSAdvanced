function timeToWalk(steps, footInMeters, speedInKmh) {
  let distance = steps * footInMeters;
  let breaksInMinutes = Math.floor(distance / 500);
  let speedInMeters = speedInKmh / 3.6;
  let time = distance / speedInMeters;

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  console.log(
    (timeHr < 10 ? "0" : "") +
      timeHr +
      ":" +
      (timeMin + breaksInMinutes < 10 ? "0" : "") +
      (timeMin + breaksInMinutes) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);

/*Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
The first is the number of steps the student takes from their home to the university
Тhe second number is the length of the student's footprint in meters
Тhe third number is the student speed in km/h
Every 500 meters the student rests and takes a 1-minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
The input comes as three numbers.
The output should be printed on the console.*/
