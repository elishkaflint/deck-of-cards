// Deck is responsible for holding and shuffling cards

class Deck {
  constructor() {
    this.cards = PERFECT_SEQUENCE;
  }

  getCards() {
    return this.cards;
  }

  shuffle() {
    const initialDeck = this.cards.slice(0);
    const shuffledDeck = [];
    while (initialDeck.length > 0) {
      const position = Math.floor(Math.random() * initialDeck.length);
      shuffledDeck.push(initialDeck[position]);
      initialDeck.splice(position, 1);
    }
    this.cards = shuffledDeck;
  }
}
