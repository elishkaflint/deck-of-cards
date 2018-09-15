

describe("UNIT TESTS: Deck of Cards", function() {

  it('Initializes with a brand new pack of cards', function() {
    let deck = new Deck();
    expect(deck.getCards()).toEqual(NEW_PACK_OF_CARDS);
  });

});
