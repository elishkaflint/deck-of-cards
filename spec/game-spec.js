describe("UNIT TESTS: Game", function() {

  describe('#new', function() {

    it('Initializes with a brand new deck of cards', function() {

      class dummyDeck {
        constructor() {
          this.cards = 'cards'
        }
      }

      let game = new Game(dummyDeck);
      expect(game.getCards()).toEqual('cards');
    });

  });

});
