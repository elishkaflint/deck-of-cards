describe('UNIT TESTS: Player', () => {
  describe('#new', () => {
    it('Initializes with an empty hand', () => {
      const player = new Player();
      expect(player.hand).toEqual([]);
    });
  });

  describe('#add', () => {
    it('adds a card to the player\'s hand', () => {
      const player = new Player();
      player.add('card');
      expect(player.hand).toContain('card');
    });
  });
});
