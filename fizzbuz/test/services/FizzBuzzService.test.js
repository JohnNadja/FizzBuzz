const FizzbuzzService = require("../../lib/services/FizzBuzzService");

describe("Pruebas para FizzbuzzService", () => {
    test("1) Explorer.score = 15", () => {
        let explorer = {name: "Explorer15", score: 15};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });
    test("2) Explorer.score = 5", () => {
        let explorer = {name: "Explorer5", score: 5};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("BUZZ");
    });
    test("3) Explorer.score = 3", () => {
        let explorer = {name: "Explorer3", score: 3};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZ");
    });
    test("4) Explorer con score 1", () => {
        let explorer = {name:"Explorer1", score: 1};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe(1);
    });
});