const PERFECT_SEQUENCE = createNewDeck();

function createNewDeck() {
  const cards = [];
  const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
  const numbers = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      cards.push(`${numbers[j]} of ${suits[i]}`);
    }
  }
  return cards;
}
