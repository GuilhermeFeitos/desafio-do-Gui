let nameHero = "Guins" 

function balanceVictoryAndDefeat(numA, numB) { 
    
    let result = numA - numB 
    return result 

    } 
    
function validNivel(result){ 
    
if (result <= 10){
   return "Ferro" 

} else if (result >= 11 && result <= 20){ 
    return "Bronze" 

}  else if (result >= 21 && result <= 50){ 
   return "Prata"

}  else if (result >= 51 && result <= 80) {
   return "Ouro" 

} else if (result >= 81 && result <=90) { 
  return "Diamante" 

} else if (result >= 91 && result <= 100) {
  return "Lendário" 

} else if (result >= 101) { 
  return "Imortal" 

} else { 
  return "Sem classificação" 
}

}

//let nivel = validVictoryOrDefeat(10,5); 

const saldoVitorias = balanceVictoryAndDefeat(10,5) 
const nivel = validNivel(saldoVitorias) 

if (saldoVitorias <=1){
    console.log( `O Herói ${nameHero} tem saldo de ${saldoVitorias} vitória e está no nível ${nivel}`)

} else {

    console.log( `O Herói ${nameHero} tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)

}

