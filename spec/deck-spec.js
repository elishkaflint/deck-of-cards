describe("UNIT TESTS: Deck", function() {

  let deck;

  beforeEach(function() {
    deck = new Deck()
    jasmine.addMatchers({
      toHaveNoDuplicates: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoDuplicates(object) };
            if(!result.pass){
              result.message = 'Expected the deck to have no duplicate outcomes';
            }
            return result;
          }
        }
      }
    });
  });

  describe('#new', function() {
    it('Initializes with a brand new deck of cards', function() {
      expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

  describe('#shuffle', function() {
    it('Uses a random seed 52 times to create a random shuffle', function() {
      spyOn(Math, "random")
      deck.shuffle();
      expect(Math.random.calls.count()).toEqual(PERFECT_SEQUENCE.length)
    });
    it('Outputs a deck of 52 cards', function() {
      deck.shuffle();
      expect(deck.cards.length).toEqual(PERFECT_SEQUENCE.length);
    });
    it('Outputs unique cards only', function() {
      deck.shuffle();
      expect(deck.cards).toHaveNoDuplicates();
    })
    it('Generates a random outcome with each shuffle', function() {
      let outcomes = [];
      let numberOfCycles = 3;
      for( i = 0; i < numberOfCycles; i++){
        deck.shuffle();
        outcomes.push(deck.getCards().join(","))
      }
      expect(outcomes).toHaveNoDuplicates();
    });
  });

});
