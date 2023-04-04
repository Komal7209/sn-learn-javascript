//
// L27S01 - hasOwnProperty => this built-in js method if an object has a property name
//
// it returns true or false

var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
gs.info(vehicle.hasOwnProperty("year"));  // <== true
gs.info(vehicle.hasOwnProperty("price")); // <== false