import { Routes, Route} from "react-router-dom";
import { useState, useEffect, React } from "react";


import BooksLayout from "./BooksLayout";
import "./BooksAPI";
import "./App.css";

import SearchBooks from "./components/searchBooks";
import { getAll ,update } from "./BooksAPI";

function App() {
  /* a better safer global var (hook) to get all the books  */
  let [AllBooks, getAllBooks] = useState([]);
/* hook only for changing positions of books  */
  let [bookCurrentShelf, moveFromShelf] = useState(0);
 /* api fetched once */
  useEffect(() => {
    getAll().then((booksList) => {
      getAllBooks(booksList);
    });
  }, []);

  console.log("AllBooks from App");
  console.log(AllBooks);
   
   function bookIndex(book){
     return AllBooks.findIndex( function(aBook){ return aBook.id === book.id;})
   }
  function updateBookShelf(book, shelf) {
    console.log("id of the book param  "+book.id +" my book arr "+Array.isArray(AllBooks))
     
    console.log("index of this book "+ bookIndex(book))
    /**the book is already existed in my get all => update the current shelf  */
    if (bookIndex(book) !==-1) {
      AllBooks[bookIndex(book)].shelf = shelf
    } 
    else {
      /**the book is new to my get all api (my books)  push it in allbooks array */
      // add new book shelf
      book.shelf = shelf;
      // save the book
      AllBooks.push(book);
     
    }
    
    // update the hook
    getAllBooks(AllBooks);
    // update the book shelf using the update api
    update(book,shelf);
    /* flip the current state */
    moveFromShelf(++bookCurrentShelf)
  }

  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <BooksLayout 
              // check if all books is an array 
                AllBooks={(AllBooks && Array.isArray(AllBooks))  ? AllBooks : []}
                updateBookShelf={updateBookShelf}
              />
            }
          ></Route>
          <Route path="/search" element={<SearchBooks  AllBooks={(AllBooks && Array.isArray(AllBooks))  ? AllBooks : []}  updateBookShelf={updateBookShelf} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
