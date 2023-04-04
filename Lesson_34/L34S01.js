//
// L34S01 - Passing objects to functions
//
var item = Class.create();
item.prototype = {
    initialize: function() { // loosly coupled, as here object is not created
    },

    debugObject : function(obj) { // insted object gets into picture from below fn

      gs.info('object=' + JSON.stringify(obj, null, 4));
    },

    type: 'item'
};

var myObj = {
  "type"   : "vehicle",
  "engine" : true,
  "wheels" : 4,
  "state"  : "allocated"
};
var myItem = new item();
myItem.debugObject(myObj); // Loosely coupled : if class and fn are not dependent on each other i.e we can easily change object without affecting core class