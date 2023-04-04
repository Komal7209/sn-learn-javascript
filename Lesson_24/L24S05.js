//
// L24S05 - splice(position, n-remove, value1, value2, ..., valueX) - add/remove elements somewhere in the middle
// position => position where it need to be inserted/removed
// n-remove => no. of time required to be removed from position and inserting single occurrence of present element at the position
//

var names = ["Eric", "Donna", "Melanie", "Jessie"];
gs.info(names.join(', '));
names.splice(2, 0, "Cary", "Henri");
gs.info(names.join(', '));
names.splice(2, 5, "Caryy", "Henrii");
gs.info(names.join(', '));

//*** Script: Eric, Donna, Melanie, Jessie
//*** Script: Eric, Donna, Cary, Henri, Melanie, Jessie
//*** Script: Eric, Donna, Caryy, Henrii
