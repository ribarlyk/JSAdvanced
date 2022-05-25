function solve(arr) {
  let obj = {};
  for (let line of arr) {
    let [city, population] = line.split(" <-> ");
    if (!obj.hasOwnProperty(city)) {
      obj[city] = 0;
    }
    obj[city] += Number(population);
  }
  let keys = Object.keys(obj);
  for (let keyso of keys) {
    console.log(`${keyso} : ${obj[keyso]}`);
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
  "Sofia <-> 1200000",
]);
