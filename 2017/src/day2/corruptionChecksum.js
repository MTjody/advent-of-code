'use strict';
const { getRawInput } = require("../common/inputReader");

function workTheRows(input) {
    return input.split("\n") // Split into rows
        .map(line => line.split("\t") // Split the rows numbers (string)
            .map(val => Number(val)) // Convert each to number
            .sort((a, b) => b - a) // Sort them descending
        )
        .filter(row => row.length > 1) // we don't want empty rows
}

/**
 * For each row, determine the difference between the largest value and the smallest value; 
 * the checksum is the sum of all of these differences.
 */
function getCheckSum(worked) {
    return worked
        .map(row => row[0] - row[row.length - 1]) // Get the diff between smallest and largest
        .reduce((prev, curr) => prev + curr, 0); // Add them all up!
}

function getDivisibleCheckSum(worked) {
    // Grab the largest value, and check if the others are divisible
    // Then the second largest etc.
    let total = 0;
    let shouldbreak;
    worked.forEach(row => {
        shouldbreak = false;
        for (let i = 0, c = row.length - 1; i < c; i++) {
            if (shouldbreak) break;
            const outer = row[i];
            for (let j = i + 1, d = row.length; j < d; j++) {
                const inner = row[j];
                if (outer % inner === 0) {
                    total += outer / inner;
                    shouldbreak = true;
                    break;
                };
            }
        }
    });
    return total;
}

async function printCheckSum() {
    const input = await getRawInput("../../resources/day2/input.txt");
    const worked = workTheRows(input);
    const checkSum = getCheckSum(worked);
    const divisible = getDivisibleCheckSum(worked);

    console.info("The checksum is", checkSum);
    console.info("The divisible checksum is", divisible);
}

printCheckSum();
