import { describe, it } from "node:test";
import assert from 'node:assert';
import { sortCalories, sum } from "./day1.js";

const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

describe("day 1", () => {

  it("returns the most calories from the example (24000)", () => {
    const res = sortCalories(input).at(0);
    assert.equal(res, 24000);
  });


  it("returns the top three calory bags summed (45000)", () => {
    const res = sortCalories(input).slice(0, 3).reduce(sum, 0);
    assert.equal(res, 45000);
  })
})
