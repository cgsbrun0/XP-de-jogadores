const nomeHeroi = "Francisco Matador de Dragões "
let xp = 2954
let classe = ""

if (xp < 1000){
    classe= "Ferro";
} else if (xp >= 1001 && xp < 2000){
    classe = "Bronze";
} else if (xp >= 2001 && xp < 5000){
    classe = "Prata";
} else if (xp >= 5001 && xp < 7000){
    classe = "Ouro";
} else if (xp >= 7001 && xp < 8000){
    classe = "Platina";
} else if (xp >= 8001 && xp < 9000){
    classe = "Ascendente";
} else if (xp >= 9001 && xp < 10000){
    classe = "Imortal";
} else if (xp >= 10001){
    classe = "Radiante";
}

console.log("O Herói de nome " +
     nomeHeroi + 
     "está no nível de " +
    classe);