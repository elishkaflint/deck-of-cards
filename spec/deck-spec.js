describe("UNIT TESTS: Deck", function() {

  beforeEach(function() {
    jasmine.addMatchers({
      toHaveNoCardsInSequence: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoSequentialElements(PERFECT_SEQUENCE, object) };
            if(!result.pass){
              result.message = 'Expected ' + object + ' to have no sequential elements';
            }
            return result;
          }
        }
      },
      toHaveNoDuplicateOutcomes: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoDuplicateOutcomes(object) };
            if(result.pass){
              result.message = 'Expected ' + object + ' to have no duplicate outcomes';
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
    it('Can be shuffled out of sequence', function() {
      let deck = new Deck();
      deck.shuffle();
      expect(deck.getCards()).toHaveNoCardsInSequence();
    });
    it('Should generate a random outcome', function() {
      let deck = new Deck();
      let outcomes = [];
      let numberOfRounds = 100;
      for( i = 0; i < numberOfRounds; i++){
        deck.shuffle();
        outcomes.push(deck.getCards().join(","))
      }
      expect(outcomes).toHaveNoDuplicateOutcomes();
    });
  });

});
