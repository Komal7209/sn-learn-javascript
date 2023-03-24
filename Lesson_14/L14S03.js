//
// L14S03 - Truthy and Falsy
//

// Take a look at strings
//
var string1;                    // undefined
var string2 = null;             //empty string
var string3 = 'Hello, world!';  //
gs.info('string1=' + ((string1) ? 'true' : 'false')); //false
gs.info('string2=' + ((string2) ? 'true' : 'false')); //false
gs.info('string3=' + ((string3) ? 'true' : 'false')); //true