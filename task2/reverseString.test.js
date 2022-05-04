const reverseStr = require('./reverseString');

test('Returns reverse string', () => {
  expect(reverseStr('hola')).toBe('aloh');
});