describe("FEATURE TESTS: Game of Cards", function() {

    // As a dealer,
    // So that I can set up a game of cards,
    // I want to start with a deck of 52 cards in perfect sequence
    it('The game starts with a brand new deck of cards', function() {
      let game = new Game();
      expect(game.getCards()).toEqual(PERFECT_SEQUENCE);
    });

    // As a dealer,
    // So that I can deal a random hand to each player,
    // I want to be able to shuffle the cards so no two cards are still in sequence
    it('The pack of cards can be shuffled', function() {
      let game = new Game();
      game.cards.shuffle();
      expect(game.getCards()).toHaveNoCardsInSequence();
    });

});
