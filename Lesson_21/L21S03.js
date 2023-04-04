//
// L21S03 - What is 'number’?
//
var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {
  var dotNumber = incGr.number; // it is an object // so if we save that in a file, then it won't display // if we want boolean, string , no. just use getValue, as directly getting value from object have many implications
  var gvNumber  = incGr.getValue('number'); // getValue is better way as it will directly get the value despite of datatype
  gs.info('dotNumber=' + typeof dotNumber + ' gvNumber=' + typeof gvNumber);
}

// Why should I care? I'll show you when we get to arrays...
