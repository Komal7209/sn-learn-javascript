//
// L24S09 - Getting the value
//
var list = [];
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {
    list.push(incGr.getValue('sys_id')); // getter // this gives copy of values
}
// when we dont use getter above, i.e : list.push(incGr.sys_id));
// it's not saving the sys_id, it's saving the reference and moving around it to what glideRecord would be pointing to, thus same sys_id would be printed
// thus printed ones are just references not the values when .getValue is not used

gs.info('list=\n' + list.join('\n'));