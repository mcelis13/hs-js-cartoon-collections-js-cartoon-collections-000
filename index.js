function dwarfRollCall(dwarves) {
  var list = "";

  for(var i = 0; i < dwarves.length; i++){
    list += (i + 1) + ". " + dwarves[i] + " ";
  }
  return list;
}

function summonCaptainPlanet(planeteerCalls){
  var call = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    call.push(planeteerCalls[i].toUpperCase() + "!");

  }
  return call;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheeses = ["cheddar","gouda","camembert"];

  for(var i = 0; i < foods.length; i ++){
    if(cheeses.indexOf(foods[i]) !== -1){
      return foods[i];
    }
  }
  return ("no cheese!");
}
