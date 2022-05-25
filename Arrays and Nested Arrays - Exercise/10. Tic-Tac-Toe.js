function solve(input) {
  let dashboard = [
    [false, false, false],

    [false, false, false],

    [false, false, false],
  ];

  let hasFreeFields = (matrix) =>
    matrix.some((arr) => arr.some((value) => value === false));

  let win = false;

  let player = "X";

  for (let i = 0; i < input.length && hasFreeFields(dashboard); i++) {
    let [row, col] = input[i].split(" ").map((num) => Number(num));

    if (!dashboard[row][col]) {
      dashboard[row][col] = player;

      if (checkForWinner(dashboard, player)) {
        win = true;

        break;
      }

      player = player === "X" ? "O" : "X";
    } else {
      console.log("This place is already taken. Please choose another!");
    }
  }

  if (win) {
    console.log(`Player ${player} wins!`);
  } else {
    console.log("The game ended! Nobody wins :(");
  }

  dashboard.forEach((line) => {
    console.log(line.join("\t"));
  });

  function checkForWinner(dashBoard, player) {
    let isWinner = false;

    for (let i = 0; i < 3; i++) {
      if (
        dashBoard[i][0] === player &&
        dashBoard[i][1] === player &&
        dashBoard[i][2] === player
      ) {
        isWinner = true;

        break;
      }

      if (
        dashBoard[0][i] === player &&
        dashBoard[1][i] === player &&
        dashBoard[2][i] === player
      ) {
        isWinner = true;

        break;
      }
    }

    if (!isWinner) {
      if (
        (dashBoard[0][0] === player &&
          dashBoard[1][1] === player &&
          dashBoard[2][2] === player) ||
        (dashBoard[2][0] === player &&
          dashBoard[1][1] === player &&
          dashBoard[0][2] === player)
      ) {
        isWinner = true;
      }
    }

    return isWinner;
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
