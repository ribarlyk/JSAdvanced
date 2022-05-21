function solve(array) {
  let num = 1;
  let result = [];
  for (let line of array) {
    if (line === "add") {
      result.push(num);
      num++;
    } else {
      result.pop();
      num++;
    }
  }
if(result.length<=0){
    console.log('Empty')
}
  console.log(result.join('\n'));
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve("remove","remove","remove")
