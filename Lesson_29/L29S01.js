//
// L29S01 - Array of Objects
//

// below each comma separated are full objects
// i.e :
// {}, {},{}
var bookList = [
  {
    "title" : "Harry Potter and the Chamber of Secrets",
    "author" : "J.K. Rowling"
  },
  {
    "title" : "Moby Dick",
    "author" : "Herman Melville"
  },
  {
    "title" : "A Tale of Two Cities",
    "author" : "Charles Dickens"
  }
];
var len = bookList.length;
gs.info('Last author=' + bookList[len-1].author); // object[index]'s author as key

// below one goes to that object index, then prints values corresponding to that key
for (var i = 0; i < len; i++) {
  var book = bookList[i];
  gs.info(i + ' - Title: ' + book.title + ' - Author: ' + book.author);
}