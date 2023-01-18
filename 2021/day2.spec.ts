import { calculatePosition, updatedCommands } from "./day2";

const testInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test("horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)", () => {
  expect(calculatePosition(testInput)).toBe(150);
})

test("After following these new instructions, you would have a horizontal position of 15 and a depth of 60. (Multiplying these produces 900.", () => {
  expect(updatedCommands(testInput)).toBe(900);
})
