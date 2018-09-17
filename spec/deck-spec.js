describe("UNIT TESTS: Deck", function() {

  let deck;

  beforeEach(function() {
    deck = new Deck()
    jasmine.addMatchers({
      toHaveNoConsecutiveCards: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoConsecutiveCards(PERFECT_SEQUENCE, object) };
            if(!result.pass){
              result.message = 'Expected the deck to have no consecutive cards';
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
      expect(deck.getCards()).toEqual(PERFECT_SEQUENCE);
    });
  });

  describe('#shuffle', function() {
    it('Rerranges the deck so that no two cards remain in sequence', function() {
      deck.shuffle();
      expect(deck.getCards()).toHaveNoConsecutiveCards();
    });
    it('Outputs a deck of 52 cards', function() {
      deck.shuffle();
      expect(deck.cards.length).toEqual(PERFECT_SEQUENCE.length);
    });
    it ('Outputs unique cards only', function() {
      deck.shuffle();
      expect(deck.cards).toHaveNoDuplicates();
    })
    it('Generates a random outcome with each shuffle', function() {
      let outcomes = [];
      let numberOfRounds = 1;
      for( i = 0; i < numberOfRounds; i++){
        deck.shuffle();
        outcomes.push(deck.getCards().join(","))
      }
      expect(outcomes).toHaveNoDuplicates();
    });
  });

});
