describe("UNIT TESTS: Deck", function() {

  describe('#new', function() {
    it('Initializes with a brand new deck of cards', function() {
      let deck = new Deck();
      expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

  describe('#shuffle', function() {
    it('Can be shuffled out of sequence', function() {
      let deck = new Deck();
      deck.shuffle();
      expect(deck.getCards()).toHaveNoCardsInSequence();
    });
  });

});
