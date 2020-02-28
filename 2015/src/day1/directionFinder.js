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

    const total = directions.map(paranthesis => {
        if (paranthesis === "(") {
            return 1;
        } else if (paranthesis === ")") {
            return -1;
        } else {
            throw new Error("Not recognized", paranthesis);
        }
    })
    .reduce((previous, current) => {
        return current = previous + current;
    }, 0);

    return floor;
}

async function doTheThing() {
    const input = await getInput("2015/resources/day1/input.txt")
    const floor = getFloor(input);
    console.info("Santa should go to floor", floor);
}

doTheThing();
