describe("UNIT TESTS: Custom Matchers", function() {

  describe('#hasNoSequentialElements', function() {
    it('Return true if no two elements are in original sequence', function() {
      let originalArray = [1,2,3,4,5]
      let arrayWithSequentialElements = [1,3,4,5,2]
      let arrayWithoutSequentialElements = [1,3,2,5,4]
      expect(hasNoSequentialElements(originalArray, arrayWithSequentialElements)).toBe(false);
      expect(hasNoSequentialElements(originalArray, arrayWithoutSequentialElements)).toBe(true);
    });
  });

});
