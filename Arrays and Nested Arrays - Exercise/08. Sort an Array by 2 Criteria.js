function solve(array) {
  array
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .forEach((element) => {
      console.log(element);
    });
}
solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
