import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, React, Redirect } from "react";

import BookShelf from "./components/BookShelf";
import BooksLayout from "./BooksLayout";
import "./BooksAPI";
import "./App.css";

import BookList from "./components/BookList";
import SearchBooks from "./components/searchBooks";
import { getAll ,update } from "./BooksAPI";

function App() {
  let [AllBooks, getAllBooks] = useState([]);
  let [bookCurrentShelf, moveFromShelf] = useState(false);

  useEffect(() => {
    getAll().then((booksList) => {
      getAllBooks(booksList);
    });
  }, []);

  console.log("AllBooks");
  console.log(AllBooks);
   
 
  function updateBookShelf(book, shelf) {
    let updatedBooks = AllBooks;
    console.log("iddd   "+book.id)
    let doBookInsidethisShelfIndex = AllBooks.findIndex( function(aBook){ return aBook.id == book.id;})
    console.log("iddd"+ doBookInsidethisShelfIndex)
    if (doBookInsidethisShelfIndex !=-1) {
      updatedBooks[doBookInsidethisShelfIndex].shelf = shelf
    } 
    else {
      // add new book shelf
      book.shelf = shelf;
      // save book
      updatedBooks.push(book);
    }
    update(book,shelf);
    getAllBooks(updatedBooks);
  }

  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <BooksLayout
                AllBooks={(AllBooks && AllBooks.length) > 0 ? AllBooks : []}
                updateBookShelf={updateBookShelf}
              />
            }
          ></Route>
          <Route path="/search" element={<SearchBooks />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
