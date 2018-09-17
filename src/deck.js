// Deck is responsible for holding and shuffling cards

class Deck {
  constructor() {
    this.cards = PERFECT_SEQUENCE;
  }

  getCards() {
    return this.cards;
  }

  shuffle() {
    let initialDeck = this.cards.slice(0);
    let shuffledDeck = []

    let position = Math.floor(Math.random() * initialDeck.length)
    shuffledDeck.push(initialDeck[position])
    initialDeck.splice(position, 1)

    console.log(initialDeck)
    console.log(shuffledDeck)

    // while (shuffledDeck.length <= PERFECT_SEQUENCE.length) {
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



      // let initialDeck = this.cards.slice(0);
      // let shuffledDeck = []
      //
      //   shuffledDeck.push(initialDeck[position])
      //   initialDeck.splice(position,1)
      // }
      // this.cards = shuffledDeck;


}
