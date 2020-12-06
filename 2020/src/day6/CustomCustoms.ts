import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/6/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');
  const groupForms: Array<string> = res.data.split('\n\n');
  /** part 1 
  const tot = groupForms
    .map((groupForm: string) => {
      // Each group
      const forms: Array<string> = groupForm.split('\n');
      const uniqueChars = new Set<string>();
      // Each form
      forms.forEach((form: string) => {
        [...form].forEach((char: string) => uniqueChars.add(char));
      });
      return uniqueChars.size;
    })
    .reduce((accum, current) => accum + current, 0);

  console.info({ tot });
*/
  /** Part 2 */
  const total = groupForms
    .map((groupForm: string) => {
      // Each group
      const forms: Array<string> = groupForm.split('\n');
      const charsToCount: { [key: string]: number } = {};
      // Each person
      forms.forEach((form: string) => {
        // Each letter
        [...form].forEach((char: string) => {
          if (charsToCount[char]) {
            charsToCount[char] += 1;
          } else {
            charsToCount[char] = 1;
          }
        });
      });

      let tot = 0;

      Object.keys(charsToCount).forEach((key: string) => {
        if (charsToCount[key] === forms.length) {
          tot += 1;
        }
      });
      return tot;
    })
    .reduce((accum, current) => accum + current, 0);

  console.info({ total });
}

process.env.NODE_ENV === 'test' ? null : main();
