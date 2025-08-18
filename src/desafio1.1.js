

let heroName ="Guins";
let xpHero = 7050;

let nivel;


switch (true) {

    case (xpHero >= 0 && xpHero <= 1000):
        nivel = "está no nível Ferro"
    break;
    
    case (xpHero >= 1001 && xpHero <=2000):
         nivel = "está no nível Bronze";
    break;

    case (xpHero >= 2001 && xpHero <= 5000):
        nivel = "está no nível Prata";
    break;

    case (xpHero >= 6001 && xpHero <= 7000):
        nivel = "está no nível Ouro";
    break;

    case (xpHero >= 7001 && xpHero <= 8000):
         nivel = "está no nível Platina";
    break;

    case (xpHero >= 8001 && xpHero <= 9000):
         nivel = "está no nível Ascendente";
    break;

    case (xpHero >= 9001 && xpHero <= 10000):
         nivel = "está no nível Mortal";
    break;

    default:
         nivel = "está no nível Radiante"
}

console.log(`O Herói de nome ${heroName} está no nível ${nivel}.`);

/*
Explicação - Swtich neste caso está sendo utilizado como valor booleano, sendo assim, precisei criar 
uma variavel nivel para vincular no Swtich.

Antes eu estava passando direto o xpHero e não realizava a validação desejada.

*/