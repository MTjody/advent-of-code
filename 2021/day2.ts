import { getInput } from "./input";

async function main() {
  const res = await getInput('2021/day/2');

  const multipliedValue = calculatePosition(res.data);
  console.log('Could it be... ', multipliedValue);
  const updatedValue = updatedCommands(res.data);
  console.log('Could it instead be... ', updatedValue);
}

export function calculatePosition(plannedCourse: string): number {
  const instructions = plannedCourse.split('\n');
  let horizontal = 0;
  let depth = 0;

  instructions.forEach((instr, i) => {
    const [instruction, position] = instr.split(' ').filter(Boolean);
    const pos = Number(position);
    if ('forward' === instruction) {
      horizontal += pos;
    } else if ('down' === instruction) {
      depth += pos;
    } else if ('up' === instruction) {
      depth -= pos;
    } else {
      console.warn(`oops for index ${i}: ${instruction}, ${position}`);
    }
  });
  //console.log({ horizontal, depth })
  return horizontal * depth;
}

export function updatedCommands(plannedCourse: string) {
  const instructions = plannedCourse.split('\n');
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  instructions.forEach((instr, i) => {
    const [instruction, position] = instr.split(' ').filter(Boolean);
    const pos = Number(position);
    if ('forward' === instruction) {
      horizontal += pos;
      depth += aim * pos;
    } else if ('down' === instruction) {
      aim += pos;
    } else if ('up' === instruction) {
      aim -= pos;
    } else {
      console.warn(`oops for index ${i}: ${instruction}, ${position}`);
    }
  });
  //console.log({ horizontal, depth })
  return horizontal * depth;
}

process.env.NODE_ENV === 'test' ? null : main();
