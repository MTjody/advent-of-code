import { createMatrix, getOccupiedCount } from './SeatingSystem';

test('Ex 1', () => {
  const input = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];

  const matrix = createMatrix(input);
  const count = getOccupiedCount(matrix);
  expect(count).toBe(37);
});
// test('Ex 2', () => { });
