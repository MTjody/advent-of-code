import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export enum Shape {
  OPEN = '.',
  TREE = '#',
}

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/3/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const rows: Array<string> = res.data.split('\n');

  // Part 1
  const numTrees2 = getTrees(rows, 3, 1);
  // Part 2
  const numTrees = getTrees(rows, 1, 1);
  const numTrees3 = getTrees(rows, 5, 1);
  const numTrees4 = getTrees(rows, 7, 1);
  const numTrees5 = getTrees(rows, 1, 2);

  console.info('Part 1', numTrees2);
  console.info('Part 2', numTrees * numTrees2 * numTrees3 * numTrees4 * numTrees5);
}

export function getTrees(rows: Array<string>, xIncr: number, yIncr: number): number {
  const arrCopy = [...rows];
  let x = 0;
  let numTrees = 0;
  arrCopy.shift();
  arrCopy.forEach((row, y) => {
    if (y % yIncr === 0 && yIncr === 1) {
      x += xIncr;
      if (x >= row.length) {
        x = x % row.length;
      }

      if (row.charAt(x) === Shape.TREE) {
        numTrees++;
      }
      // Super hacky
    } else if (y % yIncr === 1 && yIncr === 2) {
      x += xIncr;
      if (x >= row.length) {
        x = x % row.length;
      }

      if (row.charAt(x) === Shape.TREE) {
        numTrees++;
      }
    }
  });
  return numTrees;
}

process.env.NODE_ENV === 'test' ? null : main();
