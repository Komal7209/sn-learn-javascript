//
// L24S06 -  slice[start, end) - extract part of an array in to another array
//

var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
gs.info(names.join(', '));
var subNames = names.slice(1, 3); // Get names at positions 1 and 2, i.e skipping last
gs.info(subNames.join(', '));
var subNames2 = names.slice(1, -1); // Get names at positions 1 and last element
gs.info(subNames2.join(', '));
var subNames3 = names.slice(4, -1); // Get names at positions 4 and last element
gs.info(subNames3.join(', '));

/*
*** Script: Eric, Donna, Melanie, Jessie, Howard, Tomasz
*** Script: Donna, Melanie
*** Script: Donna, Melanie, Jessie, Howard
*** Script: Howard
*/