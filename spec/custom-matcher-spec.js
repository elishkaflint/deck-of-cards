describe('UNIT TESTS: Custom Matchers', () => {
  describe('#hasNoConsecutiveCards', () => {
    it('Returns true if no two elements are in original sequence', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const arrayWithSequentialElements = [[1, 3, 4, 5, 2], [1, 3, 2, 5, 4]];
      const arrayWithoutSequentialElements = [[1, 3, 2, 5, 4], [1, 3, 2, 5, 4]];
      expect(hasNoConsecutiveCards(originalArray, arrayWithSequentialElements)).toBe(false);
      expect(hasNoConsecutiveCards(originalArray, arrayWithoutSequentialElements)).toBe(true);
    });
  });

  describe('#hasNoDuplicates', () => {
    it('Returns true if no two elements are repeated', () => {
      const arraysWithDuplicates = [1, 1, 3, 4, 5];
      const arraysWithoutDuplicates = [1, 2, 3, 4, 5];
      expect(hasNoDuplicates(arraysWithDuplicates)).toBe(false);
      expect(hasNoDuplicates(arraysWithoutDuplicates)).toBe(true);
    });
  });

  describe('#hasCorrectCards', () => {
    it('Returns true if all players have the right number of cards', () => {
      const requiredNumberOfPlayers = 2;
      const requiredNumberOfCards = 3;
      const correctHands = [['card', 'card', 'card'], ['card', 'card', 'card']];
      const incorrectHands = [['card', 'card'], ['card', 'card']];
      expect(hasCorrectCards(incorrectHands, requiredNumberOfCards, requiredNumberOfPlayers)).toBe(false);
      expect(hasCorrectCards(correctHands, requiredNumberOfCards, requiredNumberOfPlayers)).toBe(true);
    });
  });
});
