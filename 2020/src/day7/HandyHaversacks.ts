import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/7/input', {
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
  rows.forEach((row) => {
    const [outer, inner] = row?.split(' contain ');
    const children = inner?.split(', ');
    const parsed = children?.map((child: string) => {
      const [count, ...rest] = child.split(' ');
      return {
        count,
        color: `${rest[0]} ${rest[1]}`,
      };
    });
    const outerColor = outer?.replace(' bags', '');
    console.info({ outerColor, parsed });
  });
}

process.env.NODE_ENV === 'test' ? null : main();
