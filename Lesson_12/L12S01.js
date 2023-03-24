//
// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed'; // if in parenthesis is true, then run first
gs.info('2: Valve is currently ' + openStatusString);

//=================================================================================================================================================================

// truthy falsy value:

var isOpenString ='false';

if(isOpenString)
  gs.info('This is open'); // it will print this value as isOpenString is a string not a bool value, so to avoid above condition we can do following:


//  var isOpenString ='false'

if(isOpenString == 'true')
  gs.info('This is open'); // now this won't be printed as it is not equal to string false

// Alternate of above example:

//var isOpenString ='false'

var isOpen = (isOpenString == 'true') ? true : false;
if(isOpen)
  gs.info('This is open'); 