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

    // Not yet working
    // let initialDeck = this.cards.slice(0);
    // let shuffledDeck = []
    // let position = Math.floor(Math.random() * initialDeck.length)
    // shuffledDeck.push(initialDeck[position])
    // initialDeck.splice(position, 1)
    // while (shuffledDeck.length < 3) {
    //   let position = Math.floor(Math.random() * initialDeck.length)
    //   let randomCard = initialDeck[position]
    //   let index = PERFECT_SEQUENCE.indexOf(randomCard)
    //   // will this selection put it next to a consecutive card?
    //   if(shuffledDeck[shuffledDeck.length - 1] !== PERFECT_SEQUENCE[index - 1]){
    //     shuffledDeck.push(randomCard);
    //     initialDeck.splice(position,1);
    //   }
    // }
  }
}
