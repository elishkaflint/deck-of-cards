describe("FEATURE TESTS: Game of Cards", function() {

  // As a dealer,
  // So that I can set up a game of cards,
  // I want to start with a deck of 52 cards in perfect sequence
  describe("The game of cards", function() {
    it('Starts with a brand new pack of cards', function() {
      let game = new Game();
      expect(game.getCards()).toEqual(NEW_PACK_OF_CARDS);
    });
  });

});
