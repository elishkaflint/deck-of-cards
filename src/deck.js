class Deck {
  constructor() {
    this.cards = PERFECT_SEQUENCE
  }

  getCards() {
    return this.cards;
  }

  shuffle() {
    this.cards = this.cards.slice(0).reverse();
  }

}
