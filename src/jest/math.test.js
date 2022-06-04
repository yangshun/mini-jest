describe('math', () => {
  describe('add', () => {
    it('positive numbers', () => {
      expect(1 + 1).toBe(2);
      expect(1 + 2).toBe(3);
    });

    it('negative numbers', () => {
      expect(-1 + 1).toBe(0);
      expect(-1 + 2).toBe(1);
    });
  });

  describe('subtract', () => {
    it('positive numbers', () => {
      expect(1 - 1).toBe(0);
      expect(1 - 2).toBe(-1);
    });
  });
});
