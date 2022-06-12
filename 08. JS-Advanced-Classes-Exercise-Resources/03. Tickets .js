function solve(data, sorter) {
  let storage = [];
  class Ticket {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }
  data.forEach((element) => {
    let [city, price, status] = element.split("|");
    price = Number(price)
    return storage.push(new Ticket(city, price, status));
  });
  let sorted;
  if (sorter === "destination" || sorter === "status") {
    sorted = storage.sort((a, b) => a[sorter].localeCompare(b[sorter]));
  } else {
    sorted = storage.sort((a, b) => a[sorter] - b[sorter]);
  }

  return sorted;
}
solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
