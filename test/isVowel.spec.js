const assertEqual = (value, expected) => {
    if (value !== expected) {
      throw new Error(`Expected '${value}' to equal '${expected}'`);
    }
  };
  
  describe('isVowel()', () => {
  
    it('debería devolver true para letra a', () => {
      assertEqual(isVowel('a'), true);
    });
  
    it('debería devolver false para letra a', () => {
      assertEqual(isVowel('b'), false);
    });
  
  });