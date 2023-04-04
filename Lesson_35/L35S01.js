//
// L35S01 - Inheritance
//
var vehicle = Class.create();
vehicle.prototype = {
    initialize: function(year, make, model) {
      this.make = make;
      this.model = model;
      this.year = year;
    },

    register : function() {
      gs.info(this.getDisplayName() + ' registered!');
    },

    info : function() {
      gs.info('Vehicle info: TBD');
    },

    getDisplayName : function() {

      return this.year + ' ' + this.make + ' ' + this.model;

    },

    type: 'vehicle'
};

var car = Class.create();
car.prototype = Object.extendsObject(vehicle, { // all info of vehicle will be applicable here

    findDealer : function() {
      gs.info('Find dealer is not yet implemented');
    },

    info : function() {
      gs.info('Car info: TBD');
    },

    type: 'car'
});

var v1 = new vehicle('2018', 'John Deere', 'Tractor');
v1.register();
v1.info();

var v2 = new car('2017', 'Honda', 'CR-V');
v2.register(); // comes from vehicle class
v2.findDealer(); // part of car class
v2.info(); // this is used for car class rather than vehice class



// check for GlideAjax