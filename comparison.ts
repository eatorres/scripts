const readlineSync = require("readline-sync");
 
const names = [
  "Kingdom Hearts 2",
  "Metal Gear Solid 3",
  "Final Fantasy X",
  "Project M",
  "Pokemon Omega Ruby",
  "Kingdom Hearts",
  "Resident Evil 4",
  "Dark Souls",
  "Bloodborne",
  "Chrono Trigger",
  "Golden Sun",
  "Resident Evil 5",
  "NieR: Automata",
  "God of War",
  "Devil May Cry 3",
  "Super Mario RPG",
  "Bioshock",
  "Uncharted 4",
  "Red Dead Redemption",
  "Diablo III",
  "Monster Hunter World: Iceborne"
];

const categories = {}

names.forEach((name) => {
  categories[name] = 0;
})


for (let i = 0; i < names.length; ++i) {
	for (let j = i + 1; j < names.length; ++j) {
    let result = "0";

    while (!["1", "2"].includes(result)) {
      result = readlineSync.question(`${names[i]} or ${names[j]}\n`);
    } 

		if (result === "1") categories[names[i]] += 1;
   	if (result === "2") categories[names[j]] += 1;
	}
}

const sortable = [];

for (let name in categories) {
  sortable.push([name, categories[name]]);
}

console.log(sortable.sort((a, b) => a[1] - b[1]));