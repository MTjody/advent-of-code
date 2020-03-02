const getInput = require("../common/inputReader");
const parseInput = require("./wrappingPaper").parseInput;

function toRibbonLength(prev, curr) {
    const arr = curr.split("x").map(Number).sort((a,b) => a - b);
    const l = arr[0];
    const w = arr[1];
    const h = arr[2];
    prev += 2*l + 2*w + l*w*h;
    return prev;
}

function calculateRibbonLength(dimensions) {
    let total = dimensions.reduce(toRibbonLength, 0);
    return total;
}

async function doTheThing() {
    const input = await getInput("../../resources/day2/input.txt");
    const parsed = parseInput(input);
    const ribbonLength = calculateRibbonLength(parsed);
    console.info("They should order", ribbonLength, "feet of ribbon.")
}

process.env.NODE_ENV === "test" ? null : doTheThing();
