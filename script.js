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

//Store the cards in an array that will be compared after flipped//

let cardsInPlay = [];

//function to flip the cards//

function compareCards() {
  let cardsInPlay = player1.deck.shift() + player2.deck.shift;
}

//Loop to go through the deck of cards//

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < cards.length; j++) {
    let card = {
      rank: cards[j],
      suits: suits[i],
      value: j,
    };
    deck.push(card);
  }
}

//Deal//

function splitDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    if (i < 26) {
      player1.deck.push(deck[i]);
    } else {
      player2.deck.push(deck[i]);
    }
  }
}

//War//

function war(i) {
  player1.deck[i];
}

//What happens when Player 1 or Player 2 wins hand//

if (player1.deck[i].value > player2.deck.shift()) {
  player2.deck.shift();
  player1.deck.push(player2.deck.shift());
  console.log("Player 1 Wins");
} else if (player2.deck[i].value > player1.deck[i].value) {
  player1.deck.shift();
  player2.deck.push(player1.deck.shift());
  console.log("Player 2 Wins");
} else (player1.deck[i].value === player2.deck[i].value) {
    war() {

    }
}

//Game loads up when the window opens//

window.onload =
shuffle(deck);
splitDeck(deck);

compareCards();
let player1Card = player1.deck.shift();
let player2Card = player2.deckshift();

 cardsInPlay = (player1Card, player2Card)

