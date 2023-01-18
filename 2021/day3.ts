import { getInput } from "./input";

async function main() {
  const res = await getInput('2021/day/3');

  const { gammaRate, epsilonRate } = getRates(res.data);

  console.log(gammaRate, epsilonRate)
  const gamma = parseInt(gammaRate.join(''), 2);
  const epsilon = parseInt(epsilonRate.join(''), 2);
  console.log('Could it be... ', gamma * epsilon);
}

export function getRates(input: string): { gammaRate: number[], epsilonRate: number[] } {
  const rows = input.split('\n').filter(Boolean);
  const gammaRateMap: { [key: string]: number } = {
  }

  rows.forEach(row => {
    const numBits = row.length;
    for (let i = 0; i < numBits; i++) {
      if (gammaRateMap[String(i)] === NaN || gammaRateMap[String(i)] === null || gammaRateMap[String(i)] === undefined) {
        gammaRateMap[String(i)] = 0;
      }
      gammaRateMap[String(i)] += Number(row[i]);
    }
  });

  const epsilonRate: number[] = [];
  console.log(Object.values(gammaRateMap), rows.length, rows.length / 2);
  Object.keys(gammaRateMap).forEach(key => {
    epsilonRate.push(gammaRateMap[key] > rows.length / 2 ? 0 : 1);
    gammaRateMap[key] = gammaRateMap[key] > rows.length / 2 ? 1 : 0;
  });


  return { gammaRate: Object.values(gammaRateMap), epsilonRate };
}


process.env.NODE_ENV === 'test' ? null : main();
