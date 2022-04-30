const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

console.log(explorers)
console.log(" \n //////// \n Lectura de datos:")

// Aplicación del ExplorerService sobre la lista de explorers
console.log("\n //////// \n Filtrado por Mission: ")
console.log(ExplorerService.filterByMission(explorers, "node"));

console.log("\n //////// \n Filtrado por cantidad: ")
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

console.log("\n //////// \n Filtrado por Mision para obtención Usernames: ")
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
