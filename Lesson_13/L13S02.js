//
// L13S02 - Multiple cases
//
// Using the switch statement
var level = 5;
var message = '';
switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1: // no break, statement thus it falls down to case 2
  case 2:
    message = 'Low';
    break;

  case 3: // Warning - what's wrong with case 3?
    message = 'Medium';
    break; // imp to write 
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);