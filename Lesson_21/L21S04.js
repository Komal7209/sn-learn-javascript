//
// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//
var incGr = new GlideRecord('incident');

// below one is similar to :
// incGr.addQuery('sys_id','965c9e5347c12200e0ef563dbb9a7156'); // add query on sys_Id
// incGr.query(); // then query
if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) { // field, record that matches that
  gs.info(incGr.getValue('sys_id'));
}

/*
Business Rule:
system definition
  business rule

*/