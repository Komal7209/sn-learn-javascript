//
//  L08S01 - Changing and detecting variable types
//  JS is loosly bound language
//
var i = 5;
var iStr = i.toString();
gs.info('typeof i'+typeof i);
gs.info('typeof iStr'+typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n); // first it prints the type and then the number


gs.info(' n+i= ' + (n+i)); // 5+5 = 10
gs.info(' n+iStr= ' + (n+iStr)); // 5+'5' = 55