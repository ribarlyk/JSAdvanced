function solve(arr) {
  arr = arr.sort((a, b) => a.localeCompare(b));
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let [product, price] = arr[i].split(" : ");
    price = Number(price);
    let letter = product[0];
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = {};
    }
    obj[letter][product] = price;
  }

  let keys = Object.keys(obj);

  for (let key of keys) {
    let sortedProducts = Object.keys(obj[key]).sort((a, b) =>
      a.localeCompare(b)
    );
    console.log(key);
    for (let line of sortedProducts) {
      console.log(`  ${line}: ${obj[key][line]}`);
    }
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
