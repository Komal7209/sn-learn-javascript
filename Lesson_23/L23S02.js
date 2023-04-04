//
// L23S02 embedded forEach
//
var list = [1, 3, 5];

list.forEach(function (item) { // directly using forEach rather than writing a separate line as it was written before // no function name required except fro function keyword
  gs.info('embedded function item=' + item);
});

// list.forEach();