const getInput = require("../common/inputReader");

function calculatePaperAmount(dimensions) {
    let squareFeet = 0;
    dimensions.forEach(dimension => {

    });
    return squareFeet;
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
    console.info(parsed);
    //const squareFeet = calculatePaperAmount(parsed);
}

doTheThing();
