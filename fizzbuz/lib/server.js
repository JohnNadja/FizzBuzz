const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission = request.params.mission;
    const AmountExpolorersPerMission = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json({mission: mission , quantity: AmountExpolorersPerMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) =>{
    const mission = request.params.mission;
    const UserMission = ExplorerController.getExplorersUserNamesByMission(mission);
    response.json({mission: mission, explorers: UserMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzz = ExplorerController.applyValidationInNumber(score);
    response.json({score: score, trick: fizzbuzz});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});


