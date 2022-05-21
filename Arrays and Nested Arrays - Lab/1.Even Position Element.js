function evenPosition(arg) {
  let arr = [];
  for (let index = 0; index < arg.length; index += 2) {
    arr.push(arg[index]);
}
console.log(arr.join(" "));
}
evenPosition(["20", "30", "40", "50", "60"]);
evenPosition(["5", "10"]);
