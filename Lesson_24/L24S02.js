// 
// L24S02 - join(string)
// join concatenates array elements
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('join: list=' + list.join(', '));  //Chuck, Kreg, Stacey

gs.info('join: list= \n' + list.join('\n')); //Chuck
                                            // Kreg
                                            // Stacey

// push(value1, value2, ..., valueX)
list.push('Dave');
list.push('Andrew');
gs.info('push: list=' + list.join(', '));// //Chuck, Kreg, Stacey, Dave, Andrew

// pop() // pops from back // LIFO
list.pop();
gs.info('pop: list=' + list.join(', '));