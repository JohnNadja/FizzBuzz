class ExplorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorerByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const AmountExpolorersPerMission = explorers.filter((explorer) => explorer.mission == mission)
        const Amount = AmountExpolorersPerMission.length
        return Amount
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const ExplorersUserNamesByMission = explorers.filter((explorer) => explorer.mission == mission)
        const UsernameByMission = ExplorersUserNamesByMission.map((explorer) => explorer.githubUsername)
        return UsernameByMission
    }

}
module.exports = ExplorerService