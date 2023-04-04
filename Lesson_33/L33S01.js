//
// L33S01 - Classes, Objects, and Prototypes
//

var person = Class.create(); // keyword to create class
person.prototype = {
    initialize: function() { // fn name : function keyword
      this.firstName = '';
      this.lastName  = '';
    },

    setFirstName : function(str) {
      this.firstName = str;
    },

    setLastName : function(str) { // setter
      this.lastName = str;
    },

    getDisplayName : function() { // getter
      return this.firstName + ' ' + this.lastName;
    },

    type: person // ends with type keyword
};

var me = new person(); // using class by creating me object
me.setFirstName('Chuck');
me.setLastName('Tomasi')
gs.info('me=' + me.firstName + ' ' + me.lastName); // Not advised
var name = me.getDisplayName();
gs.info(name);