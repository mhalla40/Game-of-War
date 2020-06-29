//define player 1 and player 2//

let player1 = {
  name: "Player 1",
  deck: [],
};

let player2 = {
  name: "Player 2",
  deck: [],
};

//Creating a card deck//

let suits = ["Spade", "Club", "Diamond", "Heart"];
let cards = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
let deck = [];

//Deck shuffle//

function shuffle(deck) {
  for (
    var j, x, i = deck.length;
    i;
    j = Math.floor(Math.random() * i),
      x = deck[--i],
      deck[i] = deck[j],
      deck[j] = x
  );
  return deck;
}
