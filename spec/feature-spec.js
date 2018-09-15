describe("FEATURE TESTS: Game of Cards", function() {

  // As a dealer,
  // So that I can set up a game of cards,
  // I want to start with a deck of 52 cards in perfect sequence
  describe("The game of cards", function() {
    it('Starts with a brand new deck of cards', function() {
      let game = new Game();
      expect(game.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

});
