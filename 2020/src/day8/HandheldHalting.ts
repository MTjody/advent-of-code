import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export interface Instruction {
  instruction: string;
  argument: number;
  visited: boolean;
}

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/8/input', {
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
  const argList: Array<Instruction> = rows.map((row: string) => {
    const [instruction, argument] = row.split(' ');
    if (instruction && argument) {
      return { instruction, argument: +argument, visited: false };
    }
  });
  // console.info(argList);
  console.info({ accum: processProgram(argList) });
}

process.env.NODE_ENV === 'test' ? null : main();

export function processProgram(argList: Array<Instruction>): number {
  let accum = 0;
  let i = 0;

  while (argList[i]?.visited === false) {
    const { instruction, argument, visited } = argList[i];
    // console.log({ i, instruction, argument, visited });
    argList[i].visited = true;
    switch (instruction) {
      case 'nop': {
        i += 1;
        // console.info('nop. Setting i to', i);
        break;
      }
      case 'jmp': {
        const _i = i;
        i += argument;
        // console.info('jmp. Added', argument, 'to', _i, i);
        break;
      }
      case 'acc': {
        const _i = i;
        const _accum = accum;
        i += 1;
        accum += argument;
        // console.info('acc. Increased i by one:', _i, i, 'and argument', argument, 'was added to accum', _accum, accum);
        break;
      }
      default: {
        throw new Error(`${instruction} not recognized`);
      }
    }
  }

  console.info({ accum });
  return accum;
}
