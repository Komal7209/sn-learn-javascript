//
// Lab 6a: Create a script to accept a table name and
// return a list records display values.
// Hint: use GlideRecord.getDisplayValue()
//
// @param tableName - name of table to query
// @return array - list of record display values
//
function listRecords(tableName) {

    var answer = [];
    var recGr = new GlideRecord(tableName);
    recGr.query();
    
    while (recGr.next()) {
        answer.push(recGr.getDisplayValue()); // this fucntion is provided by servicenow
    }
    
    return answer;
}

gs.info(listRecords('incident').join('\n'));

// getDisplayValue() => is api : https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-getDisplayValue