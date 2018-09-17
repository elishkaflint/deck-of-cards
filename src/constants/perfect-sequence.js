const PERFECT_SEQUENCE = createNewDeck()
const DEFAULT_NUMBER_OF_PLAYERS = 4
const DEFAULT_NUMBER_OF_CARDS = 7

function createNewDeck() {
  let cards = [];
  const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
  const numbers = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      cards.push(`${numbers[j]} of ${suits[i]}`)
    }
  }
  return cards;
}
