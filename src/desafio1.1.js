let heroName ="Guins";
let xpHero = 0;

switch (xpHero) {

    case (xpHero === 0 || xpHero <= 1000):
        console.log(" está no nível Ferro");
    break;
    
    case (xpHero === 1001 || xpHero <=2000):
        console.log("está no nível Bronze");
    break;

    case (xpHero === 2001 || xpHero <= 5000):
        console.log("está no nível Prata");
    break;

    case (xpHero === 6001 || xpHero <= 7000):
        console.log("está no nível Ouro");
    break;

    case (xpHero === 7001 || xpHero <= 8000):
        console.log("está no nível Platina");
    break;

    case (xpHero === 8001 || xpHero <= 9000):
        console.log("está no nível Ascendente");
    break;

    case (xpHero === 9001 || xpHero <= 10000):
        console.log("Iestá no nível mortal");
    break;

    default:
        console.log("está no nível Radiante")
}

console.log("O Herói de nome" + heroName + + xpHero)