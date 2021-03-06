describe('UNIT TESTS: Game', () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toHaveCorrectHand() {
        return {
          compare(object) {
            const result = { pass: hasCorrectCards(object, DEFAULT_NUMBER_OF_CARDS, DEFAULT_NUMBER_OF_PLAYERS) };
            if (!result.pass) {
              result.message = 'Expected players to have the right number of cards';
            }
            return result;
          },
        };
      },
    });
  });

  describe('#new', () => {
    it('Initializes with a brand new deck of cards', () => {
      class dummyDeck {
        constructor() {
          this.cards = 'cards';
        }
      }
      const game = new Game(dummyDeck);
      expect(game.getCards()).toEqual('cards');
    });
  });

  describe('#addPlayers', () => {
    it('Creates new players', () => {
      class dummyDeck {
        constructor() {
          this.cards = 'cards';
        }
      }
      class dummyPlayer {
        constructor() {
        }
      }
      const game = new Game(dummyDeck);
      game.addPlayers(dummyPlayer);
      expect(game.players.length).toEqual(DEFAULT_NUMBER_OF_PLAYERS);
    });
  });

  describe('#deal', () => {
    it('deals cards to the players', () => {
      class dummyDeck {
        constructor() {
          this.cards = [];
          for (let i = 1; i <= 52; i++) {
            this.cards.push(i);
          }
        }
      }
      class dummyPlayer {
        constructor() {
          this.hand = [];
        }

        add(card) {
          this.hand.push(card);
        }
      }
      const game = new Game(dummyDeck, dummyPlayer);
      game.deal();
      const totalCards = game.players.length * game.players[0].hand.length;
      expect(totalCards).toEqual(DEFAULT_NUMBER_OF_PLAYERS * DEFAULT_NUMBER_OF_CARDS);
    });
  });
});
