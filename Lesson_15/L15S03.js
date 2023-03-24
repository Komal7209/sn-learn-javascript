//
// L15S03 - Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) {
  if (i < 5) {
    ++i;
    gs.info(i + ' done=' + done); // i++ // uses value first thus willprint 0, // ++i => increment first thus 1 would be printed
    continue;
  }
  gs.info('I think we are done');
  done = true;
}
gs.info(i);