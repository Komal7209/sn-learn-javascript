//
// L32S01 - Recursion
//
function factorial(x) {

  // TERMINATION
  if (x < 0)
    return;

  // BASE
  if (x === 0)
    return 1;

  // RECURSION
  return x * factorial(x - 1);
}
gs.info(factorial(3)); // 6

// above concept can be used to get a particular record from db and if it has children then do get records of those children as well