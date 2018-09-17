describe("UNIT TESTS: Player", function() {

  describe('#new', function() {
    it('Initializes with an empty hand', function() {
      let player = new Player();
      expect(player.hand).toEqual([]);
    });
  });

});
