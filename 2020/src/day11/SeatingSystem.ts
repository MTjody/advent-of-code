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
}

process.env.NODE_ENV === 'test' ? null : main();
