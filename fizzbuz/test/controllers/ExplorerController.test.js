const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Pruebas para ExplorerController.js", () => {
    test("1) Getter de Explorer para sus missions ", () => {
        const ExpMission = ExplorerController.getExplorersByMission("java");
        expect(ExpMission.length).toBe(5);
    });

    test("2) Getter de Explorer para cantidad de Users en mission ", () => {
        const AmountExplorer = ExplorerController.getExplorersUserNamesByMission("node");
        expect(AmountExplorer).toContain("ajolonauta3");
    });

    test("3) Getter para Explorer en cantidad total", () => {
        const TotalExplorers = ExplorerController.getAmountOfExplorersByMission("node");
        expect(TotalExplorers).toBe(10);
    });

    test("4) Getter para saber si es fizz, buzz o fizzbuzz", () => {
        const FB = ExplorerController.applyValidationInNumber(15);
        expect(FB).toBe("FIZZBUZZ");
        const Fizz = ExplorerController.applyValidationInNumber(3);
        expect(Fizz).toBe("FIZZ");
        const Buzz = ExplorerController.applyValidationInNumber(10);
        expect(Buzz).toBe("BUZZ");
        
    });
});