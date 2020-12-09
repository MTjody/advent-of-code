import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/9/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const rows = res.data.split('\n').map((row: string) => Number(row));

  const preamble = 25;
  attackWeakness(rows, preamble);
}

process.env.NODE_ENV === 'test' ? null : main();

export function attackWeakness(rows: Array<number>, preamble: number): number | undefined {
  for (let i = preamble; i < rows.length - 1; i++) {
    let start = 0;
    const sum: Array<number> = [];
    const current = rows[i];
    const range = [...rows].splice(i - preamble, preamble);
    while (start < range.length) {
      for (let j = start + 1; j < range.length; j++) {
        if (range[start] !== range[j]) {
          sum.push(range[start] + range[j]);
        }
      }
      start++;
    }
    if (!sum.includes(current)) {
      return current;
    }
  }
}
