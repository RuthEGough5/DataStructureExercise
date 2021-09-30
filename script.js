//1 a-d
const jedi = [];

jedi[0] = "Luke";
//console.log(jedi);

jedi.push ("Obi-wan Kenobi");
//console.log(jedi);

jedi.unshift("Yoda");
//console.log(jedi);

//1 e-g
console.log(jedi[1]);

jedi.pop("Obi-Wan Kenobi");
//console.log(jedi);

jedi.shift("Obi-Wan Kenobi");
//console.log(jedi);

// 2 a-d
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// console.log(sithLords);

const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
console.log(imperialOfficers);

const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

sithLords.slice(1, 3);
console.log(sithLords);

// 3 a-d
const droids = {
    astromech: "R2D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassin = "IG-11";
console.log(droids.assassin);

//BONUS 4-6B...return to this
starWarsVillains = "Darth Vader".indexOf ("V")
console.log(starWarsVillains);

