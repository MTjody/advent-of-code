import { getRates } from "./day3";

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

test("most common bit in the corresponding position, So, the gamma rate is the binary number 10110", () => {
  expect(getRates(input).gammaRate).toStrictEqual([1, 0, 1, 1, 0]);
});

test("least common bit in the corresponding position, So, the epsilon rate is the binary number 01001", () => {
  expect(getRates(input).epsilonRate).toStrictEqual([0, 1, 0, 0, 1]);
});

test("Use the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together", () => {
  const { gammaRate, epsilonRate } = getRates(input);
  const gamma = parseInt(gammaRate.join(''), 2);
  expect(gamma).toBe(22);
  const epsilon = parseInt(epsilonRate.join(''), 2);
  expect(epsilon).toBe(9);
});
