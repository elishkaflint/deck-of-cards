describe('UNIT TESTS: Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
    jasmine.addMatchers({
      toHaveNoDuplicates() {
        return {
          compare(object) {
            const result = { pass: hasNoDuplicates(object) };
            if (!result.pass) {
              result.message = 'Expected the deck to have no duplicate outcomes';
            }
            return result;
          },
        };
      },
    });
  });

  describe('#new', () => {
    it('Initializes with a brand new deck of cards', () => {
      expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

  describe('#shuffle', () => {
    it('Uses a random seed 52 times to create a random shuffle', () => {
      spyOn(Math, 'random');
      deck.shuffle();
      expect(Math.random.calls.count()).toEqual(PERFECT_SEQUENCE.length);
    });
    it('Outputs a deck of 52 cards', () => {
      deck.shuffle();
      expect(deck.cards.length).toEqual(PERFECT_SEQUENCE.length);
    });
    it('Outputs unique cards only', () => {
      deck.shuffle();
      expect(deck.cards).toHaveNoDuplicates();
    });
    it('Generates a random outcome with each shuffle', () => {
      const outcomes = [];
      const numberOfCycles = 3;
      for (i = 0; i < numberOfCycles; i++) {
        deck.shuffle();
        outcomes.push(deck.getCards().join(','));
      }
      expect(outcomes).toHaveNoDuplicates();
    });
  });
});
