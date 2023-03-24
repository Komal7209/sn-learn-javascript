//
// L19S06 - Self running function
//

// This code is outside the function
var i = 20;

(function() {

  // Local variable
  i = 10; // uh-oh, forgot the var!

  gs.info('i=' + i);
  
}());

i = 3;
gs.info('i=' + i);

// here output would be 
// 10
// 3


//==========================
// case:2  when we make separate local variable and comment last variable initialisation
//============================//

var j = 20;

(function() {

  // Local variable
  var j = 10; // uh-oh, forgot the var!

  gs.info('j=' + j);
  
}());

//j = 3;
gs.info('j=' + j);

// here output would be 
//10
//20

//==========================
// case 3: when we don't make separate local variable and comment last variable initialisation
//============================//

var j = 20;

(function() {

  // Local variable
  j = 10; // uh-oh, forgot the var!

  gs.info('j=' + j);
  
}());

//j = 3;
gs.info('j=' + j);

// here output would be 
//10
//10
// as local variable is not local to that local function it is as per global scope