function solve(arr) {
  let arrOFobj = [];

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(" / ");
    let name = line.shift();
    let level = Number(line.shift());
    let items = [...line].join("");
    items = items ? items.split(", ") : [];
    arrOFobj.push({
      name,
      level,
      items,
    });
  }
  return (toJson = JSON.stringify(arrOFobj));
}
console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
