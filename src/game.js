// Game is responsible dealing out cards to players

class Game {
  constructor(deck = Deck, player = Player) {
    this.deck = new deck();
    this.players = this.addPlayers(player);
  }

  getCards() {
    return this.deck.cards;
  }

  addPlayers(player) {
    let players = []
    for (var i = 1; i <= DEFAULT_NUMBER_OF_PLAYERS; i++) {
      players.push(new player());
    }
    return players
  }

  shuffle() {
    this.deck.shuffle();
  }

  deal() {
    let players = this.players;
    for (var i = 0; i < DEFAULT_NUMBER_OF_CARDS; i++) {
      for (var j = 0; j < DEFAULT_NUMBER_OF_PLAYERS; j++) {
        players[j].add(this.getCards().shift());
      }
    }
    this.players = players;
  }
}
