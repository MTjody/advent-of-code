const { produceSum, halfWay } = require("./inverseCaptcha");

describe("Inverse captcha", () => {
    describe("produceSum", () => {
        test("example 1", () => {
            const sum = produceSum("1122");
            expect(sum).toBe(3);
        });
        test("example 2", () => {
            const sum = produceSum("1111");
            expect(sum).toBe(4);
        });
        test("example 3", () => {
            const sum = produceSum("1234");
            expect(sum).toBe(0);
        });
        test("example 4", () => {
            const sum = produceSum("91212129");
            expect(sum).toBe(9);
        });
    });    
    describe("halfWay", () => {
        test("example 1", () => {
            const sum = halfWay("1212");
            expect(sum).toBe(6);
        });
        test("example 2", () => {
            const sum = halfWay("1221");
            expect(sum).toBe(0);
        });
        test("example 3", () => {
            const sum = halfWay("123425");
            expect(sum).toBe(4);
        });
        test("example 4", () => {
            const sum = halfWay("123123");
            expect(sum).toBe(12);
        });
        test("example 5", () => {
            const sum = halfWay("12131415");
            expect(sum).toBe(4);
        });
    });
})
