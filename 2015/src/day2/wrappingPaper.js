const getInput = require("../common/inputReader");

/**
 * Reducer for calculating the total square feet given a gift box dimension
 * 
 * @param {number} prev The total value
 * @param {string} curr The dimensions array (e.g. "2x3x4")
 */
function toSquareFeet(prev, curr) {    
    const arr = curr.split("x").map(Number).sort((a,b) => a - b);
    const l = arr[0];
    const w = arr[1];
    const h = arr[2];
    prev += (l * w) + (2*l*w) + (2*w*h) + (2*h*l);
    return prev;
}

function calculatePaperAmount(dimensions) {
    let total = dimensions.reduce(toSquareFeet, 0);
    console.info("total", total);
    return total;
}

function parseInput(input) {
    const parsed = [];
    let dimensions = "";
    input.forEach(char => {
        if (char !== '\n') dimensions += char;

        if (char === '\n') {
            parsed.push(dimensions);
            dimensions = "";
        }
    });
    return parsed;
}

async function doTheThing() {
    const input = await getInput("../../resources/day2/input.txt");
    const parsed = parseInput(input);
    const squareFeet = calculatePaperAmount(parsed);
    console.info("They should order", squareFeet, "square feet of wrapping paper.")
}

process.env.NODE_ENV === "test" ? null : doTheThing();

module.exports = { toSquareFeet };
