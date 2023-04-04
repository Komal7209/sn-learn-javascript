//
// L36S03 - Scripted REST API with path parameters
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example path parameters
  // https://instance.service-now.com/api/now/myservice/{tableName}/{id}
  // https://instance.service-now.com/api/now/myservice/myApp_table/1234
  var pathParams = request.pathParams; 
  var tableName  = pathParams.tableName; //‘myApp_table’ 
  var id         = pathParams.id; //‘1234’

  var answer = "Response: tableName=" + tableName + " id=" + id;

  return answer;
    
})(request, response);

/*
Here we dont want to pass the param under param tab,
But under relative path : /ls3/{tableName}/{id}
And save

This will create a link which will by itself ask for path parameters
Then fill the required info and click save and thus a new link will be created down and result would be there in response tab
*/