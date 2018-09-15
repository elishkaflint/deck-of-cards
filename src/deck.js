class Deck {
  constructor() {
    this.cards = PERFECT_SEQUENCE
  }

  getCards() {
    return this.cards;
  }

  shuffle() {
    let initialDeck = this.cards.slice(0);
    let shuffledDeck = []

    while (initialDeck.length > 0) {
      var position = Math.floor(Math.random() * initialDeck.length)
      shuffledDeck.push(initialDeck[position])
      initialDeck.splice(position,1)
    }

    this.cards = shuffledDeck;
  }

}
