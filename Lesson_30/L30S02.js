//
// L30S02 - Parse example
//
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
gs.info('length=' + libraryStr.length); // no. of char as above one might act as string // 186
var libraryObj = JSON.parse(libraryStr); // this returns the object from string
gs.info('length=' + libraryObj.length); // 3
gs.info(JSON.stringify(libraryObj, null, 4));