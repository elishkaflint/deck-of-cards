describe("FEATURE TESTS: Game of Cards", function() {

  let game;

  beforeEach(function() {
    game = new Game();
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
    expect(game.getCards()).toEqual(PERFECT_SEQUENCE);
  });

  // As a dealer,
  // So that I can deal a random hand to each player,
  // I want to be able to shuffle the cards so no two cards are still in sequence
  it('The pack of cards can be shuffled so that no cards remain in sequence', function() {
    let shuffles = [];
    let numberOfCycles = 50;
    for (let i = 0; i < numberOfCycles; i++){
      game.shuffle();
      shuffles.push(game.getCards())
    }
    expect(shuffles).toHaveNoConsecutiveCards();
  });

  // As a dealer,
  // So that I can start the game,
  // I want to be able to deal out 7 cards to 4 players
  it('A hand of cards can be dealt to a given number of players', function() {
    game.deal();
    expect(game.playerHands).toHaveCorrectHand();
  });

});
