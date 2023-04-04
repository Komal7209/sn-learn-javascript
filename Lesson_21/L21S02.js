//
// L21S02 - Get and display numbers on all incidents v2
//
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true); // all active record with value as true
incGr.orderBy('number'); // sorted by number
incGr.setLimit(5); // to get only 5 of these records
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}