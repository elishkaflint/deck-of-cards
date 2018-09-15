const NEW_PACK_OF_CARDS = createNewPack()

function createNewPack() {
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
