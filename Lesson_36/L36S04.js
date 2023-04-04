//
// L36S04 - Scripted REST API (POST) with request body payload
//
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var name  = request.body.data.name;
    var id    = request.body.data.id;
    var color = request.body.data.color;
    
    var answer = "Response: name=" + name + " id=" + id + " color=" + color;

    return answer;
    
})(request, response);

/*
1. change to POST
2. put relative path as ls4
3. provide body in builder
4. Click on save and then result would be in response



*/