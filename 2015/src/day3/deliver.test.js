const { populateGrid } = require("./deliver");

describe("Santa delivers presents", () => {
    describe("populateGrid", () => {
        test("example 1", () => {
            const grid = populateGrid([">"]);
            expect(grid.size).toBe(2);
        });
        test("example 2", () => {
            const grid = populateGrid(Array.from("^>v<"));
            expect(grid.size).toBe(4);
        });
        test("example 3", () => {
            const grid = populateGrid(Array.from("^v^v^v^v^v"));
            expect(grid.size).toBe(2);
        });
    });
});
