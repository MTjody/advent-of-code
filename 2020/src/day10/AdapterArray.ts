import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/10/input', {
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

  rows.map((row: string) => Number(row));

  const { ones, threes } = doTheThing(rows);
  console.info({ ones, threes, mult: ones * threes });
}

process.env.NODE_ENV === 'test' ? null : main();

export function doTheThing(input: Array<number>): { ones: number; threes: number } {
  const sorted = input.sort((a, b) => a - b);
  let ones = 0;
  let threes = 0;
  for (let i = 0; i < sorted.length; i++) {
    const jolt = sorted[i];
    const next = sorted[i + 1];
    if (next - jolt === 1) {
      ones += 1;
    } else if (next - jolt === 3) {
      threes += 1;
    }
    if (!next) {
      // End goal, always add a three
      threes += 1;
    }
    if (i === 0) {
      ones += 1;
    }
  }
  return { ones, threes };
}
