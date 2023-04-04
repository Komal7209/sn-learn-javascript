//
// Lab 8b Script Include Test Script
//
//var list = new SNJS().getRecords('problem', 5);
//or
var sn = new SNJS();// make me an object
var list = sn.getRecords('problem', 5); // call this method by putting that into object
                      // tableName , Limit
gs.info(list.length);
gs.info(JSON.stringify(list, null, 4));

/*
1. System definitions
2. Script Include
3. new
4. give name RecordLookup , then gives api name by default and a base script as well

*/

/*
1. copy above script in script background
2. 
*/

// above one is for testing the scriptInclude of lab 8b