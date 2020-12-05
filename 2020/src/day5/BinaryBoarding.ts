import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/5/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');
  const boardingPasses = res.data.split('\n');

  const allNums: Array<{ row: number; column: number }> = [];
  const map: {
    [row: number]: Array<number>;
  } = {};

  const sorted = boardingPasses
    .map((boardingPass: string): number => {
      if (boardingPass) {
        const rowData = boardingPass.slice(0, 7);
        const row = traveseBinary(0, 127, rowData);
        const columnData = boardingPass.slice(7);
        const column = traveseBinary(0, 7, columnData);

        const arr = map[row];
        if (arr) {
          arr.push(column);
        } else {
          map[row] = [column];
        }

        if (row !== 0) {
          allNums.push({ row, column });
        }
        return row * 8 + column;
      }
      return 0;
    })
    .sort((a: number, b: number) => a - b);

  // console.info({ begin: sorted[0], end: sorted[sorted.length - 1] });
  Object.keys(map).forEach((value: string) => {
    const key = +value;
    const seats = map[key].sort((a, b) => a - b);
    if (seats.length === 7) {
      // TODO this requires manual checking
      console.info({ key, seats });
      for (let i = 0; i < seats.length; i++) {
        if (seats[i] > i) {
          console.info({ key, i, res: key * 8 + i });
          return;
        }
      }
    }
  });
}

type availCommands = 'F' | 'L' | 'R' | 'B';

function getDirection(instruction: availCommands): 'lower' | 'upper' {
  switch (instruction) {
    case 'F':
      return 'lower';
    case 'L':
      return 'lower';
    case 'R':
      return 'upper';
    case 'B':
      return 'upper';
    default:
      throw new Error('gosh');
  }
}

export function traveseBinary(low: number, high: number, instructions: string): number {
  const current = instructions.charAt(0);
  const rest = instructions.slice(1);
  // console.info({ current, low, high });
  /**
   * F means to take the lower half
   * L means to take the lower half
   *
   * R means to take the upper half
   * B means to take the upper half
   */
  const direction = getDirection(current as availCommands);

  // The final instruction keeps the lower of the two
  if (rest === '') {
    return direction === 'lower' ? low : high;
  }
  // console.info({ low, high, current });
  const _low = direction === 'lower' ? low : low + Math.ceil((high - low) / 2);
  const _high = direction === 'lower' ? high - Math.ceil((high - low) / 2) : high;

  // console.info({ _low, _high, direction });

  return traveseBinary(_low, _high, rest);
}

process.env.NODE_ENV === 'test' ? null : main();
