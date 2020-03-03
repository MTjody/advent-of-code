import '@babel/polyfill';
const toSquareFeet = require("./wrappingPaper").toSquareFeet;

describe("WrappingPaper", () => {
    describe("toSquareFeet", () => {
        test("example 1", () => {
            expect(toSquareFeet(0, "2x3x4")).toBe(58);
        });
        test("example 2", () => {
            expect(toSquareFeet(0, "1x1x10")).toBe(43);
        })
    });
})
