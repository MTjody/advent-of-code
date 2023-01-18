import { getInput } from "./input";

async function main() {
  const res = await getInput('2021/day/1');

  countDepthIncreases(res.data);
  countSlidingIncrease(res.data);
}

export function countDepthIncreases(seaFloorDepths: string) {
  let count = 0;
  const depths = seaFloorDepths.split('\n').map(Number);

  depths.forEach((val, i) => {
    if (i === 0) {
      return;
    }

    if (val > depths[i - 1]) {
      count++;
    }
  });
  //console.log('count:', count);
  return count;
}

export function countSlidingIncrease(seaFloorDepths: string) {
  let count = 0;

  let slidingValues: number[] = [];
  const depths = seaFloorDepths.split('\n').map(Number);

  for (let i = 0; i < depths.length; i++) {
    const sum = sumSlidingThree(depths, i);
    slidingValues.push(sum)
  }
  slidingValues.forEach((val, i) => {
    if (i === 0 || val === 0) {
      return;
    }
    if (val > slidingValues[i - 1]) {
      count++;
    }
  });
  //console.log('count:', count);

  return count;
}

function sumSlidingThree(numbers: number[], index: number): number {
  if (index + 3 > numbers.length) return 0;
  return numbers[index] + numbers[index + 1] + numbers[index + 2];
}

process.env.NODE_ENV === 'test' ? null : main();
