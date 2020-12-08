import { Instruction, processProgram } from './HandheldHalting';

test('Ex 1', () => {
  const program: Array<Instruction> = [
    { instruction: 'nop', argument: +0, visited: false },
    { instruction: 'acc', argument: +1, visited: false },
    { instruction: 'jmp', argument: +4, visited: false },
    { instruction: 'acc', argument: +3, visited: false },
    { instruction: 'jmp', argument: -3, visited: false },
    { instruction: 'acc', argument: -99, visited: false },
    { instruction: 'acc', argument: +1, visited: false },
    { instruction: 'jmp', argument: -4, visited: false },
    { instruction: 'acc', argument: +6, visited: false },
  ];
  const accum = processProgram(program);
  expect(accum).toBe(5);
});
// test('Ex 2', () => { });
