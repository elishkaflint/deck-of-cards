describe("UNIT TESTS: Player", function() {

  describe('#new', function() {
    it('Initializes with an empty hand', function() {
      let player = new Player();
      expect(player.hand).toEqual([]);
    });
  });

  describe('#add', function() {
    it('adds a card to the player\'s hand', function() {
      let player = new Player();
      player.add('card')
      expect(player.hand).toContain('card');
    });
  });

});
