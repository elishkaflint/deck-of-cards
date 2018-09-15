describe("UNIT TESTS: Deck of Cards", function() {

  it('Initializes with a brand new deck of cards', function() {
    let deck = new Deck();
    expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
  });

});
