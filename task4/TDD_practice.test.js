const capital = require('./capital');

test('Functions works properly', () => {
  expect(capital('hola')).toBeTruthy();
  expect(capital('hola')).toBe('Hola');
});