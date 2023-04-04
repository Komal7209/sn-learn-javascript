//
// L30S01 - Stringify and Parse
//
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
gs.info(bookList); // That's not very helpful!
// that just prints [object, Object], [object...

var bookListStr = JSON.stringify(bookList);
gs.info(bookListStr);  // I can read it - sort of
//[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]


var bookListStrFormat = JSON.stringify(bookList, null, 4); // null is format specifier // 4 spaces in front i.e before starting of title, author i.e each line
gs.info(bookListStrFormat); // Ah - that's better!a
/*
[
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
]
*/