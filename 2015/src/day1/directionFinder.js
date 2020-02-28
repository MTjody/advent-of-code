const getInput = require("../common/inputReader");

let floor;

/**
 * Gets which floor given a list of directions
 * 
 * An opening parenthesis, (, means he should go up one floor,
 * and a closing parenthesis, ), means he should go down one floor.
 *  
 * @param {Array} directions List of directions
 */
function getFloor(directions) {

}

async function doTheThing() {
    const input = await getInput("../../resources/day1/input.txt")
    console.info("input", input);
    //const floor = getFloor(input);
    //console.info("Santa should go to floor", floor);
}

doTheThing();
