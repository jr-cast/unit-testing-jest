stringLength = require('./stringLength');

test('Counts chars in string word', () => {
  expect(stringLength('string')).toBeDefined();
  expect(stringLength('string')).toEqual(6);

});

test('At least 1 char and not longer than 10', () => {
  expect(stringLength('string')).toBeDefined();
  expect(stringLength('string')).not.toBeUndefined();
  expect(stringLength('string')).toBeTruthy();
  expect(stringLength('string')).toBeGreaterThan(0);
  expect(stringLength('string')).toBeLessThanOrEqual(10);
})

