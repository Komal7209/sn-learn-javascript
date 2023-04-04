//
// L24S03 - shift() //FIFO
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('Before shift(), list[0]=' + list[0]);
list.shift(); //shifts towards front, thus front element is poped out, basically opp of pop
gs.info('shift: list=' + list.join(', '));
gs.info('After shift(), list[0]=' + list[0]);
