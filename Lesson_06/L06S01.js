//
// L06S01 - Strings
//
var firstName = "Chuck";
var lastName  = 'Tomasi';  // Either is ok
var myCar     = "Chuck's Car";  // Mix them to avoid issues
// or can use below by using '\'
// var myCar     = 'Chuck\'s Car'; // this wont throw any error 

// Note the use of + when strings are involved
var name = firstName + ' ' + lastName;
gs.info(name);

// for getting length of a string:
var len = name.length

gs.info('length of name=' + name.length);