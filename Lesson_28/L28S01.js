//
// L28S01 - Get object keys
// here key refers to properties of that object
//
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
for (var key in vehicle) {
  gs.info('key=' + key + ' value=' + vehicle[key]);
}