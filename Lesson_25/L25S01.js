//
// L25S01 - ArrayUtil // using uniques utility of ArrayUtil
//
// Under script includes of sys def, there is script written for ArrayUtil


var au = new ArrayUtil();
var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];
var newNames = au.unique(names);
gs.info(newNames.join(', '));