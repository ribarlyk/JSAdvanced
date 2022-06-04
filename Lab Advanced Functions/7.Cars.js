function solve(arr) {
  let currentName = ''
  for (const list of arr) {
    let commands = list.split(" ");
    let command = commands[0];
    let nameIs = commands[1];
    let key = commands[2];
    let value = commands[3]
   
    if (command === "create") {
      currentName = nameIs;
     currentName = {};
    }
    if (command === "set") {
     currentName[key] = value;
    }
    if (command=== "print") {
      console.log(currentName);
    }
    
  }

}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
