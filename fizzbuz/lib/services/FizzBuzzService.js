class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if (explorer.score % 3 === 0){
            const explorer3 = {name: "Explorer3", score: 3, trick: "FIZZ"}
            FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        }
        else if(explorer.score % 5 === 0){
            const explorer5 = {name: "Explorer5", score: 5, trick: "BUZZ"}
            FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        }
        else if (explorer.score % 3 === 0 && explorer.score % 5 === 0){
        const explorer15 = {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        }
        else{
        const explorer1 = {name: "Explorer1", score: 1, trick: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        }
    }
}

module.exports = FizzBuzzService