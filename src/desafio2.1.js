let nameHero = "Guins"

function balanceVictoryAndDefeat(victory, defeat) {

return victory - defeat
}


function validLevel(balance){

    if (balance <= 10){
        return "Iron"
    } else if (balance >= 11 && balance <= 20){
        return "Bronze"
    } else if (balance >= 21 && balance <= 50){
        return "Silver" 
    } else if (balance >= 51 && balance <= 80) {
        return "Gold"
    } else if (balance >= 81 && balance <=90) {
        return "Diamond"
    } else if (balance >= 91 && balance <= 100) {
        return "Legendary"
    } else {
        return "Immortal"
    } 
} 

 const matches = [
            [5,2],
            [15,5],
            [30,10],
            [75,25],
            [95,5],
            [120,10]
        ]

for (let i =0; i <matches.length; i++) {

    const victory = matches[i][0]
    const defeat = matches[i][1]

const balanceVictories = balanceVictoryAndDefeat(victory, defeat)
const level = validLevel(balanceVictories)

console.log(`The Hero ${nameHero} has a balance of ${balanceVictories} victories and is at the ${level} level`)

}



