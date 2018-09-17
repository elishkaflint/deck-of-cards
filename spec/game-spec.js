describe("UNIT TESTS: Game", function() {

  beforeEach(function() {
    jasmine.addMatchers({
      toHaveCorrectHand: function(){
        return {
          compare: function(object){
            var result = { pass: hasCorrectCards(object, DEFAULT_NUMBER_OF_CARDS, DEFAULT_NUMBER_OF_PLAYERS) };
            if(!result.pass){
              result.message = 'Expected players to have the right number of cards';
            }
            return result;
          }
        }
      }
    });
  });

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

  describe('#addPlayers', function() {
    it('Creates new players', function() {
      class dummyDeck {
        constructor() {
          this.cards = 'cards'
        }
      }
      class dummyPlayer {
        constructor() {
          this.cards = 'cards'
        }
      }
      let game = new Game(dummyDeck);
      game.addPlayers(dummyPlayer);
      expect(game.players.length).toEqual(DEFAULT_NUMBER_OF_PLAYERS)
    })
  })

  describe('#deal', function() {
    it('deals cards to the players', function() {
      class dummyDeck {
        constructor() {
          this.cards = [];
            for (var i = 1; i <= 52; i++) {
              this.cards.push(i)
            }
          }
        }
      let game = new Game(dummyDeck);
      game.deal()
      expect(game.hands).toHaveCorrectHand();
    });
  });

});
