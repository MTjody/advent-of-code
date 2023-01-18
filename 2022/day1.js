import fs from 'fs';

const input = fs.readFileSync('./day1-input.txt', { encoding: 'utf-8' });

export function sum(sum, cal) {
  return sum + cal;
}

export function sortCalories(input) {
  
  /**
   * split the input into bags. we split by '\n\n'
   * now we have the bags
   * sum the contents of each bag
   * 
   * add the result to an array <- ?
   * sort the array descending to find the largest number (0 index)
   * 
   */

  return input
    .split("\n\n") // get the bags
    .map((bag) =>  // calculate the calories
      bag.split("\n").map(Number).reduce(sum, 0)
    )
    .sort((a, b) => b - a) // sort by calories
}

//console.log(sortCalories(input))
console.log(sortCalories(input).slice(0, 3).reduce(sum, 0));
