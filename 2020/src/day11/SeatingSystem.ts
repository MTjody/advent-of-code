import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/11/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const rows = res.data.split('\n');
  const empty = rows.pop();
  // Remove empty string (last line)
  console.assert(empty === '', 'Last entry was not empty string');

  const matrix = createMatrix(rows);
  const occupied = getOccupiedCount(matrix);
  console.info({ occupied });
}

process.env.NODE_ENV === 'test' ? null : main();

export function createMatrix(input: Array<string>): string[][] {
  const matrix: string[][] = [[]];
  input.forEach((row, index) => {
    const arr: string[] = [...row];
    matrix[index] = [];
    matrix[index] = matrix[index].concat(arr);
  });
  return matrix;
}

export function getOccupiedCount(matrix: string[][]): number {
  let indicesToToggle: { row: number; column: number }[];
  let occupiedCount;
  do {
    occupiedCount = 0;
    indicesToToggle = [];
    for (let outer = 0; outer < matrix.length; outer++) {
      // console.log(matrix[outer]);
      for (let inner = 0; inner < matrix[outer].length; inner++) {
        const current = matrix[outer][inner];
        if (current === 'L' || current === '#') {
          // console.info(`getting adjacent for ${current} at matrix[${outer}][${inner}]`);
          const adjacent = getAdjacent(matrix, outer, inner);
          // console.info('adjacent', adjacent);
          if (current === 'L' && adjacent.occupied === 0) {
            indicesToToggle.push({ row: outer, column: inner });
          }
          if (current === '#') {
            occupiedCount++;
            if (adjacent.occupied >= 4) {
              indicesToToggle.push({ row: outer, column: inner });
            }
          }
        }
      }
    }
    // console.info({ occupiedCount, indicesToToggle });
    indicesToToggle.forEach((index) => {
      const newVal = matrix[index.row][index.column] === '#' ? 'L' : '#';
      matrix[index.row][index.column] = newVal;
    });
  } while (indicesToToggle.length > 0);
  return occupiedCount;
}

function getAdjacent(matrix: string[][], outer: number, inner: number): { empty: number; occupied: number } {
  let empty = 0;
  let occupied = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (!(outer + i === outer && inner + j === inner)) {
        const row = matrix[outer + i];
        // console.info('checking row', outer + i, row);
        if (row !== undefined) {
          const current = row[inner + j];

          // console.info('checking seat', inner + j, row[inner + j]);
          if (current === 'L') {
            empty++;
          }
          if (current === '#') {
            occupied++;
          }
        }
      }
    }
  }
  return { empty, occupied };
}
