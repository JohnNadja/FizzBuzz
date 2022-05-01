const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Unit Tests for ExplorerService Class", () => {
  test('1) Calcular # Explorers en misión Node', () => {
    const explorers = [{mission: "node"}] 
    const explorerInNode = ExplorerService.filterByMission(explorers, "node")
    expect(explorerInNode.length).toBe(1);
  });
})