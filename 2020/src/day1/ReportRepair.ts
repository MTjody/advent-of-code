import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/1/input', {
      headers: {
        // TODO env variable
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const all = res.data.split('\n');
  // First
  // const { i, j } = getTwoIndices(all);

  // Second
  const { i, j, k } = getThreeIndices(all);
  console.info('Answer:', all[i] * all[j] * all[k], 'numbers:', all[i], all[j], all[k]);
}

function getTwoIndices(data: Array<string>): { i: number; j: number } {
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (Number(data[i]) + Number(data[j]) === 2020) {
        return { i, j };
      }
    }
  }
  return { i: -1, j: -1 };
}

export function getThreeIndices(data: Array<string>): { i: number; j: number; k: number } {
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      for (let k = i; k < data.length; k++) {
        if (Number(data[i]) + Number(data[j]) + Number(data[k]) === 2020) {
          console.info('returning', i, j, k);
          return { i, j, k };
        }
      }
    }
  }
  return { i: -1, j: -1, k: -1 };
}

process.env.NODE_ENV === 'test' ? null : main();
