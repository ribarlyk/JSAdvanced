function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let [town, product, price] = arr[i].split(" | ");
    price = Number(price);
    if (!obj[product]) {
      obj[product] = { price, town };
    } else {
      if (obj[product].price > price) {
        obj[product] = { price, town };
      }
    }
  }
  let keys = Object.keys(obj);
  for (let key of keys) {
    console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
