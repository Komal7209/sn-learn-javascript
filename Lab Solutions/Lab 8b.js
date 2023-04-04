//
// Lab 8b - Rebuild the previous lab using a script include for the core logic
//  Use Query parameters to accept the table name and limit
//  Return the array of objects in the response body
//
// Get table record display values and sys_ids
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var queryParams = request.queryParams; 
    var tableName   = queryParams.tableName;
    var limit      = queryParams.limit;

    var list = new SNJS().getRecords(tableName, limit);
        
    response.setBody(list);
    
})(request, response);

/*

Create a new scriptRestApi under previous scriptedRestAPI's resource's new
then we have removed whole logic as that is present in SNJS scriptInclude
and just added lab 8b-scriptedInclude-test.js into the same

Then test the same using rest api explorer
Add query param
tableName: problem
limit: 5
*/