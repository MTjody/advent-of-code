import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/2/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const all: Array<string> = res.data.split('\n');
  const valid: Array<string> = [];
  all.forEach((row: string) => secondDay(row, valid));
  console.info('Valid', valid.length);
}

function secondDay(row: string, valid: Array<string>): void {
  if (row?.length) {
    const [indices, char, password] = row.split(' ');
    const [firstPos, secondPos] = indices.split('-');
    const [character] = char;
    const first = password.charAt(+firstPos - 1);
    const second = password.charAt(+secondPos - 1);

    if ((first === character && second !== character) || (first !== character && second === character)) {
      valid.push(row);
    }
  }
}
function firstDay(row: string, valid: Array<string>): void {
  if (row?.length) {
    const [range, char, password] = row.split(' ');
    const [min, max] = range.split('-');
    const filtered = [...password].filter((character) => {
      return character === char[0];
    });
    const matches = filtered.length;
    if (matches >= +min && matches <= +max) {
      valid.push(password);
    }
  }
}

process.env.NODE_ENV === 'test' ? null : main();
