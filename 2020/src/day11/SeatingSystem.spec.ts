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

  const matrix: string[][] = [[]];
  input.forEach((row, index) => {
    const arr: string[] = [...row];
    matrix[index] = [];
    matrix[index] = matrix[index].concat(arr);
  });

  /**
   * If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.
   */

  for (let outer = 0; outer < matrix.length; outer++) {
    console.log(matrix[outer]);
    for (let inner = 0; inner < matrix[outer].length; inner++) {
      const current = matrix[outer][inner];
      if (current === 'L' || current === '#') {
        console.info(`getting adjacent for matrix[${outer}][${inner}]`);
        const adjacent = getAdjacent(matrix, outer, inner);
        console.info('adjacent', adjacent);
      }
    }
  }
});
// test('Ex 2', () => { });
function getAdjacent(matrix: string[][], outer: number, inner: number): string[] {
  const adjacent = [];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (!(outer + i === outer && inner + j === inner)) {
        const row = matrix[outer + i];
        // console.info('checking row', outer + i, row);
        if (row !== undefined) {
          const current = row[inner + j];

          // console.info('checking seat', inner + j, row[inner + j]);
          if (current === 'L' || current === '#') {
            adjacent.push(current);
          }
        }
      }
    }
  }
  return adjacent;
}
