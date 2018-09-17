describe("UNIT TESTS: Custom Matchers", function() {

  describe('#hasNoSequentialElements', function() {
    it('Returns true if no two elements are in original sequence', function() {
      let originalArray = [1,2,3,4,5]
      let arrayWithSequentialElements = [1,3,4,5,2]
      let arrayWithoutSequentialElements = [1,3,2,5,4]
      expect(hasNoSequentialElements(originalArray, arrayWithSequentialElements)).toBe(false);
      expect(hasNoSequentialElements(originalArray, arrayWithoutSequentialElements)).toBe(true);
    });
  });

  describe('#hasNoDuplicates', function() {
    it('Returns true if no two elements are repeated', function() {
      let arrayWithDuplicates = [1,1,3,4,5]
      let arrayWithoutDuplicates = [1,2,3,4,5]
      expect(hasNoDuplicates(arrayWithDuplicates)).toBe(false);
      expect(hasNoDuplicates(arrayWithoutDuplicates)).toBe(true);
    });
  });

  describe('#hasCorrectCards', function() {
    it('Returns true if all players have the right number of cards', function() {
      let requiredNumberOfPlayers = 2
      let requiredNumberOfCards = 3
      let correctHands = [['card', 'card', 'card'],['card', 'card', 'card']]
      let incorrectHands = [['card', 'card'],['card', 'card']]
      expect(hasCorrectCards(incorrectHands,requiredNumberOfCards, requiredNumberOfPlayers)).toBe(false)
      expect(hasCorrectCards(correctHands,requiredNumberOfCards, requiredNumberOfPlayers)).toBe(true)
    });
  });

});
