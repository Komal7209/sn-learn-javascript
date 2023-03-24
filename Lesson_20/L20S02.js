//
// L20S02 - Trapping that error
//
try {
  for (var i = 0; i < 5; i++) {
    gs.info('i=' + i + ' answer=' + answer);
  }
} catch (e) {
  gs.error('Uh-oh ' + e.message);
}
gs.info('done');

// here whatever error it will show, go to system logs from left search bar