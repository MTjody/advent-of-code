import { attackWeakness } from './EncodingError';

test('Ex 1', () => {
  const numbers = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];
  const preamble = 5;

  expect(attackWeakness(numbers, preamble)).toBe(127);
});
