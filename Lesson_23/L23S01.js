//
// L23S01 forEach with external function
//
var list = [1, 3, 5];

list.forEach(myFunction); // array.loop(fn)

function myFunction(item) { // because of forEach loop, each ele from array would be given as parameter to the fn
  gs.info('myFunction item=' + item);
}
