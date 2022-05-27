function solve(arr) {
  let newArr = [];
  class Towns {
    constructor(town, latitude, longitude) {
      this.Town = town;
      this.Latitude = latitude;
      this.Longitude = longitude;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    let token = arr[i]
      .split("|")
      .map((t) => t.trim())
      .filter((x) => x.length > 0);
    let name = token[0];
    let latitude = Number(token[1]).toFixed(2);
    latitude = Number(latitude);
    let longitude = Number(token[2]).toFixed(2);
    longitude = Number(longitude);
    let townObj = new Towns(name, latitude, longitude);
    newArr.push(townObj);
  }
  console.log(JSON.stringify(newArr));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
