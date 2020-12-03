import { getTrees } from './Trajectory';

describe('Trajectory', () => {
  const testInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];
  test('Day 1', () => {
    const numTrees = getTrees(testInput, 3, 1);
    expect(numTrees).toBe(7);
  });
  test('Day 2', () => {
    const numTrees = getTrees(testInput, 1, 1);
    const numTrees2 = getTrees(testInput, 3, 1);
    const numTrees3 = getTrees(testInput, 5, 1);
    const numTrees4 = getTrees(testInput, 7, 1);
    const numTrees5 = getTrees(testInput, 1, 2);
    expect(numTrees).toBe(2);
    expect(numTrees2).toBe(7);
    expect(numTrees3).toBe(3);
    expect(numTrees4).toBe(4);
    expect(numTrees5).toBe(2);

    expect(numTrees * numTrees2 * numTrees3 * numTrees4 * numTrees5).toBe(336);
  });
});
