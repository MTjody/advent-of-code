'use strict';

const { getInput } = require("../common/inputReader");

function getCircularHalfwayIndex(ind, total, digitsToJump) {
    if (ind + digitsToJump < total) {
        return ind + digitsToJump
    }
    return (ind + digitsToJump) % total;
}

function halfWay(numbers) {
    const matchingDigits = [];
    const digitsToJump = numbers.length / 2;

    for (let i = 0, c = numbers.length; i < c; i++) {
        const current = numbers[i];
        const index = getCircularHalfwayIndex(i, c, digitsToJump);

        if (current === numbers[index]) matchingDigits.push(current);
    }
    return matchingDigits.reduce((a, b) => Number(a) + Number(b), 0);
}

/**
 * Produces a sum according to the rules of day 1
 * @param {String} numbers the input numbers
 */
function produceSum(numbers) {
    const matchingDigits = [];
    // Start with the first / last
    if (numbers[0] === numbers[numbers.length - 1]) matchingDigits.push(numbers[0]); 
    for (let i = 1, c = numbers.length; i < c; i++) {
        const current = numbers[i];
        const previous = numbers[i-1];
        if (current === previous) matchingDigits.push(current);
    }
    return matchingDigits.reduce((a, b) => Number(a) + Number(b), 0);
}

async function main() {
    const input = await getInput("../../resources/day1/input.txt");
    const sum = produceSum(input);
    const halfWaySum = halfWay(input);
    console.info("The sum of all digits matching the next is:", sum);
    console.info("The sum of all digits matching the halfway digit is:", halfWaySum);
}

process.env.NODE_ENV === "test" ? null : main();

module.exports = { produceSum, halfWay };
