// Game is responsible dealing out cards to players

class Game {
  constructor(deck = Deck) {
    this.deck = new deck();
    this.playerHands = []
  }

  getCards() {
    return this.deck.cards;
  }

  shuffle() {
    this.deck.shuffle();
  }

  deal() {
    this.createPlayers();
    for (var i = 0; i < DEFAULT_NUMBER_OF_CARDS; i++) {
      for (var j = 0; j < DEFAULT_NUMBER_OF_PLAYERS; j++) {
        this.playerHands[j][i] = this.getCards().shift()
      }
    }
  }

  createPlayers() {
    for (var i = 1; i <= DEFAULT_NUMBER_OF_PLAYERS; i++) {
      this.playerHands.push([]);
    }
  }

}
