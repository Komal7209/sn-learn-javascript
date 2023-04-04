//
// L36S02 - Scripted REST API with query parameters
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example Query parameters
  // https://<instance_rest_endpoint>?active=true&name=now
  var queryParams   = request.queryParams; 
  var isActiveQuery = queryParams.active; //true
  var nameQueryVal  = queryParams.name; //‘now’

  var answer = "Response: active=" + isActiveQuery + " name=" + nameQueryVal;

  return answer;
    
})(request, response);

/*
1. Under resources tab, click new 
2. give name, paste above code, give LS2 in relative path option
3. click save and under resource path, new link would be created
4. Click on rest api explorer link , and copy the above link
    a. put query param as: 
    b. active true 
    c. name now
5. Click on send 

*/