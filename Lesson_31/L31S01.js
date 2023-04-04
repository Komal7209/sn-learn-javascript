//
// L31S01 More string stuff
// Find the position of a character or substring
//
var subject = 'Warning: Email is not working';
var pos = subject.indexOf('Email');
gs.info(pos); // returns 9

var pos2 = subject.indexOf('Warning');
gs.info(pos); // returns 0

var pos2 = subject.indexOf('Name');
gs.info(pos); // returns -1 , as it is not present there