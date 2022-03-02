import { countDepthIncreases, countSlidingIncrease } from "./day1";

const testInput = `199
200
208
210
200
207
240
269
260
263`;

test("day1-1: should count the number of times a depth measurement increases from the previous measurement", () => {
  expect(countDepthIncreases(testInput)).toBe(7);
});

test("day1-2: should count the number of times the sum of measurements in this sliding window increases from the previous sum", () => {
  expect(countSlidingIncrease(testInput)).toBe(5);
});
