function sort(array, p1) {
  if (p1 === "asc") {
    array.sort((a, b) => a - b);
  } else {
    array.sort((a, b) => b - a);
  }
  return array;
}
sort([14, 7, 17, 6, 8], "desc");
