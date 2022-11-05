//Tarea 1
const fibonacci = (termino) => {
    if (termino === 0) return 0;
    if (termino === 1) return 1;
    return fibonacci(termino - 1) + fibonacci(termino - 2);
}

let serie = [];

for (let termino = 0; true; termino++) {

    const valor = fibonacci(termino);

    if (valor > 1000) break;
    serie.push(valor);
}

console.log("tarea 5 - 1a: ", serie);
console.log("tarea 5 - 1b: ", serie.filter(numero => numero % 2 === 0));
console.log("tarea 5 - 1c: ", serie.filter(numero => numero % 2 !== 0));

//Tarea 2
// Array of strings with the names of the characters
const marvelCharactersNames = [
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
    'Hawkeye',
    'Black Panther',
    'Wolverine',
    'Captain Marvel',
    'Doctor Strange'
];

console.log("tarea 5 - 2:");
console.log("antes:", marvelCharactersNames);
console.log("despues:", marvelCharactersNames.map(heroe => heroe.toUpperCase()));

//Tarea 3
// Array of Marvel Characters
const marvelCharacters = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain America",
      realName: "Steve Rogers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hulk",
      realName: "Bruce Banner",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hawkeye",
      realName: "Clint Barton",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Panther",
      realName: "T'Challa",
      height: 6.0,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Wolverine",
      realName: "James Howlett",
      height: 5.3,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain Marvel",
      realName: "Carol Danvers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Doctor Strange",
      realName: "Stephen Strange",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
  ];

console.log("tarea 5 - 3:");
console.log("antes:", marvelCharacters);
console.log("despues Filtro height >= 5.3:", marvelCharacters.filter(heroe => heroe.height >= 5.3));