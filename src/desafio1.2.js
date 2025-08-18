let nameHero = "Guins";
let xpHero = 1000;
let nivel;

if (xpHero <= 1000){
   nivel = "está no nível Ferro"
} else if (xpHero >= 1001 && xpHero <= 2000 ){
    nivel = "está no nível Bronze"
} else if (xpHero >= 2001 && xpHero <= 5000){
    nivel = "está no nível Prata"
} else if (xpHero >= 5001 && xpHero <= 7000){
    nivel = "está no nível Ouro"
} else if (xpHero >= 7001 && xpHero <= 8000){
    nivel = "está no nível Platina"
} else if (xpHero >= 8001 && xpHero <= 9000 ){
    nivel = "está no nível Ascendente"
} else if (xpHero >= 9001 && xpHero <= 10000){
    nivel = "está no nível Imortal"
} else {
    nivel = "está no nível Radiante"
}

console.log(`O Herói de nome ${nameHero} ${nivel}`)