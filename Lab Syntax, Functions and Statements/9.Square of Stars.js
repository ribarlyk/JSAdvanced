function solve(arg) {
  let stars = "* ".repeat(arg);

  while (arg > 0) {
    console.log(stars);
    arg--;
  }
  
}
solve(8);
