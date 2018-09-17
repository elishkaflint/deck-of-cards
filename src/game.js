class Game {
  constructor(deck = Deck) {
    this.deck = new deck();
    this.hands = []
  }

  getCards() {
    return this.deck.cards;
  }

  shuffle() {
    this.deck.shuffle();
  }

  deal() {
    
  }

}
