describe("FEATURE TESTS: Game of Cards", function() {

  beforeEach(function() {
    jasmine.addMatchers({
      toHaveNoConsecutiveCards: function(){
        return {
          compare: function(object){
            var result = { pass: hasNoConsecutiveCards(PERFECT_SEQUENCE, object) };
            if(!result.pass){
              result.message = 'Expected the deck to have no sequential elements';
            }
            return result;
          }
        }
      },
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

  // As a dealer,
  // So that I can set up a game of cards,
  // I want to start with a deck of 52 cards in perfect sequence
  it('The game starts with a brand new deck of cards', function() {
    let game = new Game();
    expect(game.getCards()).toEqual(PERFECT_SEQUENCE);
  });

  // As a dealer,
  // So that I can deal a random hand to each player,
  // I want to be able to shuffle the cards so no two cards are still in sequence
  it('The pack of cards can be shuffled so that no cards remain in sequence', function() {
    let game = new Game();
    game.shuffle();
    expect(game.getCards()).toHaveNoConsecutiveCards();
  });

  // As a player,
  // So that I can start the game,
  // I want to be able to deal out 7 cards to 4 players
  it('A hand of cards can be dealt to a given number of players', function() {
    let game = new Game();
    game.deal();
    expect(game.playerHands).toHaveCorrectHand();
  });

});
