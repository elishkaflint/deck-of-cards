// Deck is responsible for holding and shuffling cards

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
      let position = Math.floor(Math.random() * initialDeck.length)
      console.log(initialDeck)
      console.log(initialDeck[position])
      shuffledDeck.push(initialDeck[position])
      initialDeck.splice(position,1)
    }
    this.cards = shuffledDeck;
  }

}
