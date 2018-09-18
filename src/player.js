// Player is responsible for holding a hand of cards

class Player {
  constructor() {
    this.hand = [];
  }

  add(card) {
    this.hand.push(card);
  }
}
