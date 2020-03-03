const getInput = require("../common/inputReader");

function createPopulator(grid, x, y, deliveryMan) {
    return (direction, index) => {
        if (deliveryMan === "Santa" && index % 2 === 0 ||
            deliveryMan === "Robo" && index % 2 === 1) {
            switch (direction) {
                case "^":
                    y++;
                    break;
                case ">":
                    x++
                    break;
                case "v":
                    y--
                    break;
                case "<":
                    x--
                    break;
                default: throw new Error("Oops");
            }
            const currentKey = String(x) + String(y);
            if (grid.has(currentKey)) {
                let num = grid.get(currentKey);
                grid.set(currentKey, ++num);
            } else {
                grid.set(currentKey, 0);
            }
        }
    }
}

function populateGrid(directions) {
    const grid = new Map();
    let x = 0, y = 0;
    grid.set(String(x) + String(y), 2);

    directions.forEach(createPopulator(grid, x, y, "Santa"));
    directions.forEach(createPopulator(grid, x, y, "Robo"));

    return grid;
}

async function doTheThing() {
    const input = await getInput("../../resources/day3/input.txt");
    const grid = populateGrid(Array.from(input));
    console.info(grid.size, "lucky bastards got a present delivered");
}

process.env.NODE_ENV === "test" ? null : doTheThing();

module.exports = { populateGrid };
