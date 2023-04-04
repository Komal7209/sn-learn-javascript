//
// L31S02 - Use the position of a character/substring as a condition
//
var short_description = 'System is displaying error message';
if (short_description.indexOf('error') >= 0) {
  gs.info("Error message found");
}
// this could be situation, if dont know exact position of that word, but we know if that word occured then we would be required to perform other actions corresponding to that