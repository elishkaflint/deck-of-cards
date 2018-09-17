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
      const game = new Game(dummyDeck);
      game.deal();
      expect(game.playerHands).toHaveCorrectHand();
    });
  });
});
