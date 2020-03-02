const getInput = require("../common/inputReader");

function getInstructionPos(directions) {
    let floor = 0;

    for (let i = 0; i < directions.length; i++) {
        let character = directions[i];
        if (character === "(") {
            floor ++;
        } else if (character === ")") {
            floor --;
        } else {
            throw new Error("Not recognized", character);
        }
        if (floor < 0) {
            return i + 1;
        }
    }

    return -1;
}

async function doTheThing() {
    const input = await getInput("../../resources/day1/input.txt");
    const instructionPos = getInstructionPos(input);
    console.info("Position of the instruction which took santa to the basement:", instructionPos);
}

doTheThing();
