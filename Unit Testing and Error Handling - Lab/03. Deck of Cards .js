function deck(cards) {
  let results = [];

  for (let card of cards) {
    const face = card.slice(0, -1);
    const power = card.slice(-1);

    try {
      let cardS = playingCards(face, power);
      results.push(cardS);
    } catch (err) {
      results = ["Invalid card: " + card];
    }
  }
  console.log(results.join(" "));
  function playingCards(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (faces.indexOf(face) == -1) {
      throw new Error("Error");
    }
    if (suits[suit] == undefined) {
      throw new Error("Error");
    }

    let result = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
    return result;
  }
}
deck(["AS", "10D", "KH", "2C"]);
deck(["5S", "3D", "QD", "5J"]);
deck(["6S", "4D", "JD", "1C"]);
