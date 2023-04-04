// 
// L24S04 - unshift // pushes at front
//
var list = ['Chuck', 'Kreg', 'Stacey'];
var newLength = list.unshift('Jason', 'Andrew');
gs.info('new length=' + newLength + ' unshift() list=' + list.join(', '));
// Jason, Andrew, Chuck, Kreg, Stacey