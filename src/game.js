class Game {
  constructor(deck = Deck) {
    this.deck = new deck();
  }

  getCards() {
    return this.deck.cards;
  }

}
