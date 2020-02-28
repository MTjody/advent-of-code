const fs = require("fs");

/**
 * Gets the puzzle input given a path
 * 
 * @param {String} path the path to the file to read
 */
async function getInput(path) {
    let input;
    try {
        input = await fs.promises.readFile(path, {encoding: "utf8"});
    } catch (e) {
        console.error(e);
    }
    return Array.from(input);
}

module.exports = getInput;
