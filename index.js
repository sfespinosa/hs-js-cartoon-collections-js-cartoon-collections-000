function dwarfRollCall(dwarves) {
  let numberedDwarves = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedDwarves.push(`${i + 1}. ${dwarves[i]} `);
  } return numberedDwarves.join('');
}

function summonCaptainPlanet(planeteerCalls){
  let planeteerYells = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    planeteerYells.push(`${planeteerCalls[i].toUpperCase()}!`);
  } return planeteerYells;
}

function longPlaneteerCalls(words) {
  let wordCheck = [];
  for (let i = 0; i < words.length; i++) {
    wordCheck = words[i].split('');
    if (wordCheck.length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < foods.length; i++) {
    for (let a = 0; a < cheese.length; a++) {
      let specificCheese = cheese[a];
      if (foods[i] === specificCheese) {
        return foods[i]; 
      } 
    } 
  } return `no cheese!`;
}
