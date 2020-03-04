const fs = require("fs");
const path = require("path");

/**
 * Gets the puzzle input given a file path
 * 
 * @param {String} filePath the file path to the input file
 */
async function getInput(filePath) {
    let input;
    try {
        input = await fs.promises.readFile(path.resolve(__dirname, filePath), {encoding: "utf8"});
    } catch (e) {
        console.error(e);
    }
    return Array.from(input);
}

module.exports = getInput;
