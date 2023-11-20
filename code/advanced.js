/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

englandTourtistAttractions = ["Big Ben, London Eye"];
unitedKingdom[1].tourtistAttractions = englandTourtistAttractions;

// console.log(unitedKingdom[1]);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

unitedKingdom[2].capital = "Cardiff";

// console.log(unitedKingdom[2]);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */
scottishPopulation = unitedKingdom[0].population;
// for (const country of unitedKingdom){
//   if (scottishPopulation > country.population){
//     console.log("Scottish population bigger than " + country.name);
//   } else if (scottishPopulation < country.population){
//     console.log("Scottish population smaller than " + country.name);
//   }
// }

if (scottishPopulation > unitedKingdom[1].population && scottishPopulation > unitedKingdom[2].population && scottishPopulation > unitedKingdom[2].population){
  console.log("Scottish population is the biggest.");
} else if (scottishPopulation < unitedKingdom[1].population && scottishPopulation < unitedKingdom[2].population && scottishPopulation < unitedKingdom[2].population){
  console.log("Scottish population is the smallest.");
}else {
  console.log("Scottish population is somewhere in the middle.");
}