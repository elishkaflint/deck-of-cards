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

  describe('#shuffle', function() {
    it('Shuffles the deck of cards', function() {
      class dummyDeck {
        constructor() {
          this.cards = 'cards'
        }
        shuffle() {
          return 'cards shuffled'
        }
      }
      let game = new Game(dummyDeck);
      console.log(game.cards)
      game.deck.shuffle();
      expect(game.getCards()).toEqual('cards shuffled')
    })
  })

});
