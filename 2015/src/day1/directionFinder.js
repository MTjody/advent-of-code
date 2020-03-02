const getInput = require("../common/inputReader");

/**
 * Gets which floor given a list of directions
 * 
 * An opening parenthesis, (, means he should go up one floor,
 * and a closing parenthesis, ), means he should go down one floor.
 *  
 * @param {Array} directions List of directions
 */
function getFloor(directions) {
    let floor = 0;

    directions.forEach(character => {
        if (character === "(") {
            floor ++;
        } else if (character === ")") {
            floor --;
        } else {
            throw new Error("Not recognized", character);
        }
    });

    return floor;
}

async function doTheThing() {
    const input = await getInput("../../resources/day1/input.txt");
    const floor = getFloor(input);
    console.info("Santa should go to floor", floor);
}

doTheThing();
