'use strict';
const { getRawInput } = require("../common/inputReader");

/**
 * For each row, determine the difference between the largest value and the smallest value; 
 * the checksum is the sum of all of these differences.
 */
async function printCheckSum() {
    const input = await getRawInput("../../resources/day2/input.txt");
    const checkSum = input.split("\n") // Split into rows
        .map(line => line.split("\t") // Split the rows numbers (string)
            .map(val => Number(val)) // Convert each to number
            .sort((a, b) => a - b) // Sort them "naturally"
        )
        .filter(row => row.length > 1) // we don't want empty rows
        .map(row => row[row.length - 1] - row[0]) // Get the diff between smallest and largest
        .reduce((prev, curr) => prev + curr, 0); // Add them all up!

    console.info("The checksum is", checkSum);
}

printCheckSum();
