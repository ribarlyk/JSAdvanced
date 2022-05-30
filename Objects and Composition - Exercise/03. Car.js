function solve(wantedCar) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [
    { type: "hatchback", color: wantedCar.color },
    { type: "coupe", color: wantedCar.color },
  ];
  let wheelsize =
    wantedCar.wheelsize % 2 == 1
      ? wantedCar.wheelsize
      : wantedCar.wheelsize - 1;

  return {
    model: wantedCar.model,
    engine: engines.filter((e) => e.power >= wantedCar.power)[0],
    carriage: carriages.filter((c) => c.type == wantedCar.carriage)[0],
    wheels: [wheelsize, wheelsize, wheelsize, wheelsize],
  };
}
function solve(toBeCar) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [
    { type: "hatchback", color: toBeCar.color },
    { type: "coupe", color: toBeCar.color },
  ];
  let wheelsize =
    toBeCar.wheelsize % 2 == 1 ? toBeCar.wheelsize : toBeCar.wheelsize - 1;

  return {
    model: toBeCar.model,
    engine: engines.filter((a) => a.power >= toBeCar.power)[0],
    carriage: carriages.filter((c) => c.type == toBeCar.carriage)[0],
    wheelsize: [wheelsize, wheelsize, wheelsize, wheelsize],
  };
}

solve({
  model: "Ferrari",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 21,
});
