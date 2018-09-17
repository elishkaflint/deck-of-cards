describe("UNIT TESTS: Deck", function() {

  beforeEach(function() {
    jasmine.addMatchers({
      toHaveNoCardsInSequence: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoSequentialElements(PERFECT_SEQUENCE, object) };
            if(!result.pass){
              result.message = 'Expected the deck to have no sequential elements';
            }
            return result;
          }
        }
      },
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
      let deck = new Deck();
      expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

  describe('#shuffle', function() {
    it('Rerranges the deck so that no two cards remain in sequence', function() {
      let deck = new Deck();
      deck.shuffle();
      expect(deck.getCards()).toHaveNoCardsInSequence();
    });
    it('Outputs a deck of 52 cards', function() {
      let deck = new Deck();
      deck.shuffle();
      expect(deck.cards.length).toEqual(52);
    });
    it ('Outputs unique cards only', function() {
      let deck = new Deck();
      deck.shuffle();
      expect(deck.cards).toHaveNoDuplicates();
    })
    it('Generates a random outcome with each shuffle', function() {
      let deck = new Deck();
      let outcomes = [];
      let numberOfRounds = 3;
      for( i = 0; i < numberOfRounds; i++){
        deck.shuffle();
        outcomes.push(deck.getCards().join(","))
      }
      expect(outcomes).toHaveNoDuplicates();
    });
  });

});
